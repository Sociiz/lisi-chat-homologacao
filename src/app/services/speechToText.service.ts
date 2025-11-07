import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface SttResult {
  dataUrl?: string;
  mime?: string;
  transcript: string;
  interimTranscript: string;
  hasVoice: boolean;
  error?: string | null;
}

@Injectable({ providedIn: 'root' })
export class SpeechToTextService {
  private isRecordingFlag = false;
  private mediaRecorder: MediaRecorder | null = null;
  private recordedChunks: Blob[] = [];
  private recognition: any = null;
  private sttTranscript = '';
  private sttInterim = '';
  private sttErrorOccurred = false;
  private audioCtx: (AudioContext | null) = null;
  private analyser: (AnalyserNode | null) = null;
  private vadInterval: any = null;
  private voiceDetected = false;

  // Emissões para debug/UI: parciais e finais
  private interimSubject = new Subject<string>();
  interim$ = this.interimSubject.asObservable();
  private finalSubject = new Subject<string>();
  final$ = this.finalSubject.asObservable();

  public isRecording(): boolean {
    return this.isRecordingFlag;
  }

  /** Inicia captura de áudio, VAD e SpeechRecognition (pt-BR) */
  async start(): Promise<void> {
    if (this.isRecordingFlag) return;
    this.sttTranscript = '';
    this.sttInterim = '';
    this.sttErrorOccurred = false;
    this.voiceDetected = false;
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mimeType = MediaRecorder.isTypeSupported('audio/webm;codecs=opus')
        ? 'audio/webm;codecs=opus'
        : 'audio/webm';

      this.mediaRecorder = new MediaRecorder(stream, { mimeType });
      this.recordedChunks = [];
      this.mediaRecorder.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) this.recordedChunks.push(e.data);
      };
      this.mediaRecorder.start();
      this.isRecordingFlag = true;

      // VAD
      try {
        const AudioContextCls: any = (window as any).AudioContext || (window as any).webkitAudioContext;
        this.audioCtx = AudioContextCls ? new AudioContextCls() : null;
        if (this.audioCtx) {
          const source = this.audioCtx.createMediaStreamSource(stream);
          this.analyser = this.audioCtx.createAnalyser();
          this.analyser.fftSize = 2048;
          source.connect(this.analyser);
          const dataArray = new Uint8Array(this.analyser.fftSize);
          this.vadInterval = setInterval(() => {
            if (!this.analyser) return;
            this.analyser.getByteTimeDomainData(dataArray);
            let sumSquares = 0;
            for (let i = 0; i < dataArray.length; i++) {
              const v = dataArray[i] - 128;
              sumSquares += v * v;
            }
            const rms = Math.sqrt(sumSquares / dataArray.length);
            if (rms > 10) this.voiceDetected = true;
          }, 120);
        }
      } catch {}

      // Reconhecimento de fala (Web Speech API)
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        this.recognition = new SpeechRecognition();
        this.recognition.lang = 'pt-BR';
        this.recognition.interimResults = true;
        this.recognition.continuous = true;
        this.recognition.maxAlternatives = 1;

        this.recognition.onresult = (event: any) => {
          try {
            const startIdx = event.resultIndex || 0;
            for (let i = startIdx; i < event.results.length; i++) {
              const result = event.results[i];
              if (result && result[0] && result[0].transcript) {
                const transcript = result[0].transcript.trim();
                if (result.isFinal) {
                  this.sttTranscript += ` ${transcript}`;
                  try { this.finalSubject.next(this.sttTranscript.trim()); } catch {}
                } else {
                  this.sttInterim = `${this.sttInterim} ${transcript}`.trim();
                  try { this.interimSubject.next(this.sttInterim); } catch {}
                }
              }
            }
          } catch {}
        };

        this.recognition.onerror = (event: any) => {
          const err = (event && event.error) || event;
          if (err === 'network' || err === 'no-speech' || err === 'aborted') {
            try { this.recognition.abort(); } catch {}
            if (this.isRecordingFlag) {
              setTimeout(() => {
                try { if (this.recognition) this.recognition.start(); } catch {}
              }, 300);
            }
            return;
          }
          this.sttTranscript = '';
          this.sttErrorOccurred = true;
          this.stop();
        };

        this.recognition.onend = () => {
          if (this.isRecordingFlag) {
            try { this.recognition.start(); } catch {}
          }
        };

        try { this.recognition.start(); } catch {}
      }
    } catch (e) {
      this.isRecordingFlag = false;
      throw e;
    }
  }

  /** Encerra captura e retorna resultado com dataUrl, mime, transcrição e VAD */
  async stop(): Promise<SttResult> {
    const result: SttResult = {
      dataUrl: undefined,
      mime: undefined,
      transcript: '',
      interimTranscript: '',
      hasVoice: false,
      error: null,
    };
    if (!this.mediaRecorder) {
      this.isRecordingFlag = false;
      return result;
    }
    this.isRecordingFlag = false;

    const rec = this.recognition;
    let recogEndPromise: Promise<void> = Promise.resolve();
    if (rec) {
      recogEndPromise = new Promise<void>((resolve) => {
        const timeout = setTimeout(() => resolve(), 600);
        const prevOnEnd = rec.onend;
        rec.onend = (...args: any[]) => {
          try { prevOnEnd?.(...args as any); } catch {}
          clearTimeout(timeout);
          resolve();
        };
        try { rec.stop(); } catch { clearTimeout(timeout); resolve(); }
      });
    }

    const stopPromise = new Promise<void>((resolve) => {
      if (this.mediaRecorder) {
        this.mediaRecorder.onstop = () => resolve();
        try { this.mediaRecorder.stop(); } catch { resolve(); }
      } else {
        resolve();
      }
    });

    await Promise.all([stopPromise, recogEndPromise]);

    const chunks = this.recordedChunks;
    if (chunks.length > 0) {
      const mimeType = this.mediaRecorder?.mimeType || 'audio/webm';
      const blob = new Blob(chunks, { type: mimeType });
      const dataUrl = await this.blobToDataUrl(blob);
      result.dataUrl = dataUrl;
      result.mime = mimeType;
    }

    result.transcript = (this.sttTranscript || '').trim();
    result.interimTranscript = (this.sttInterim || '').trim();
    result.hasVoice = !!this.voiceDetected;
    result.error = this.sttErrorOccurred ? 'stt-error' : null;

    // Cleanup
    if (this.mediaRecorder && this.mediaRecorder.stream) {
      try { this.mediaRecorder.stream.getTracks().forEach((t: MediaStreamTrack) => t.stop()); } catch {}
    }
    if (this.vadInterval) { clearInterval(this.vadInterval); this.vadInterval = null; }
    if (this.audioCtx) { try { await this.audioCtx.close(); } catch {} this.audioCtx = null; this.analyser = null; }
    this.voiceDetected = false;
    this.mediaRecorder = null;
    this.recordedChunks = [];
    this.recognition = null;
    this.sttTranscript = '';
    this.sttInterim = '';
    this.sttErrorOccurred = false;

    return result;
  }

  private blobToDataUrl(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(String(reader.result || ''));
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }
}


