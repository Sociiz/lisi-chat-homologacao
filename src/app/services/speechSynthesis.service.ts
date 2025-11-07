import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpeechSynthesisService {

  constructor() { }

  /**
   * Indica se há fala em andamento.
   */
  public isSpeaking(): boolean {
    if ('speechSynthesis' in window) {
      return window.speechSynthesis.speaking;
    }
    return false;
  }

  /**
   * Alterna reprodução: se estiver falando, interrompe; caso contrário, inicia do início.
   */
  public toggleTtsMessage(msg: any, enabled: boolean, clientKey: string): void {
    if (!enabled || clientKey !== '49fa27aab4f70b8eaacf') return;
    if ('speechSynthesis' in window && window.speechSynthesis.speaking) {
      this.cancelSpeech();
      return;
    }
    this.playTtsMessage(msg, enabled, clientKey);
  }

  /**
   * Reproduz texto em voz alta usando a API Web Speech Synthesis.
   * @param msg A mensagem a ser reproduzida
   * @param enabled Se o TTS está habilitado
   * @param clientKey O clientKey para validação
   */
  public playTtsMessage(msg: any, enabled: boolean, clientKey: string): void {
    // console.log('TTS Debug:', {
    //   enabled,
    //   clientKey,
    //   msg: msg
    // });

    if (!enabled || clientKey !== '49fa27aab4f70b8eaacf') {
      // console.log('TTS blocked - conditions not met');
      return;
    }

    try {
      // Cancel any ongoing speech
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }

      let text = msg.htmlFormatado || msg.olmRespostaIa || msg.olmMensagemCliente;
      // console.log('TTS text:', text);

      // Convert SafeHtml to string if needed
      if (text && typeof text === 'object' && text.changingThisBreaksApplicationSecurity) {
        text = text.changingThisBreaksApplicationSecurity;
      }

      // Handle menu objects (BT messages)
      if (text && typeof text === 'object' && text.message) {
        let fullText = text.message;

        // Add button options if available
        if (text.buttonList && text.buttonList.buttons && Array.isArray(text.buttonList.buttons)) {
          const buttonOptions = text.buttonList.buttons
            .map((btn: any, index: number) => `${index + 1}. ${btn.label}`)
            .join(', ');

          if (buttonOptions) {
            fullText += '. Opções disponíveis: ' + buttonOptions;
          }
        }

        text = fullText;
      }

      // Convert to string if it's an object
      if (text && typeof text === 'object') {
        try {
          text = JSON.stringify(text);
        } catch (e) {
          console.warn('Could not stringify object:', e);
          return;
        }
      }

      if (!text || typeof text !== 'string') return;

      // Strip HTML tags
      const plainText = text.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
      if (!plainText) return;

      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(plainText);
        utterance.lang = 'pt-BR';
        utterance.rate = 1.0;
        utterance.pitch = 1.0;
        utterance.volume = 1.0;

        const selectVoice = () => {
          const voices = window.speechSynthesis.getVoices();

          // tenta achar uma voz feminina brasileira
          const femaleVoice = voices.find(voice =>
            voice.lang.startsWith('pt') &&
            (
              voice.name.toLowerCase().includes('female') ||
              voice.name.toLowerCase().includes('mulher') ||
              voice.name.toLowerCase().includes('luciana') ||
              voice.name.toLowerCase().includes('google português do brasil')
            )
          );

          // fallback: qualquer voz em português
          const ptVoice = femaleVoice || voices.find(v => v.lang.startsWith('pt'));

          if (ptVoice) {
            utterance.voice = ptVoice;
          }

          window.speechSynthesis.speak(utterance);
        };

        // garante que as vozes já foram carregadas
        if (window.speechSynthesis.getVoices().length === 0) {
          window.speechSynthesis.onvoiceschanged = selectVoice;
        } else {
          selectVoice();
        }
      }
    } catch (error) {
      console.warn('Erro ao reproduzir TTS:', error);
    }
  }

  /**
   * Cancela qualquer fala em andamento.
   */
  cancelSpeech(): void {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }
}
