// Angular Core
import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewChecked,
  ViewChild,
  ElementRef,
  HostListener,
} from "@angular/core";

// Angular Platform
import { ActivatedRoute } from "@angular/router";
import { DomSanitizer, SafeHtml, SafeUrl } from "@angular/platform-browser";

// RxJS
import { finalize, firstValueFrom, Subscription } from "rxjs";

// Third-party
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";

// Services
import { ChatSocketService } from "src/app/services/chat-socket.service";
import { NotificacaoService } from "src/app/services/notificacao.service";
import { RatingService } from "src/app/services/rating.service";
import { EmojiService } from "src/app/services/emoji.service";
import { AtendimentoHumanizadoService } from "src/app/services/atendimento-humanizado.service";
import { SpeechSynthesisService } from "src/app/services/speechSynthesis.service";
import { SpeechToTextService } from "src/app/services/speechToText.service";

@Component({
  selector: "app-lisi",
  templateUrl: "./lisi.component.html",
  styleUrls: ["./lisi.component.scss"],
})
export class LisiComponent implements OnInit, OnDestroy, AfterViewChecked {
  // View References
  @ViewChild("scrollRef") scrollRef?: ElementRef;

  // ========================================
  // PROPRIEDADES PÚBLICAS - Estado do Chat
  // ========================================

  // Dados Principais do Chat
  salaPrincipal: any = {};
  conversaSala: any[] = [];
  mensagem = "";
  protocolo: string | null = null;
  clientKey: string = "49fa27aab4f70b8eaacf"; // Fixo para Lisi
  cacheBuster: number = Date.now();
  userId: string | null = null;
  atendenteId: string | null = null;
  posicao: number | null = null;
  hasUserInteracted: boolean = false; // Controla se o usuário já interagiu

  // ========================================
  // PROPRIEDADES PÚBLICAS - Controle de UI
  // ========================================

  // Estados de Carregamento
  estaCarregandoPagina = true;
  estaCarregandoSala = false;
  estaEsperandoAtendimento = false;
  isSendingMessage = false;
  isInputBlocked = false;
  isSubmittingRating = false;
  isWaitingForResponse = false;

  // Estados do Chat
  chatEnd = false;
  atendimentoHumanoAtivo = false;
  socketConfigurado = false;
  isSouceVisible = false;
  showUploadMenu = false;
  readonly MAX_UPLOAD_BYTES: number = 100 * 1024 * 1024;
  readonly ALLOWED_IMAGE_MIME_TYPES: string[] = [
    "image/png",
    "image/jpeg",
    "image/jpg",
  ];
  readonly ALLOWED_DOCUMENT_MIME_TYPES: string[] = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "text/csv",
    "text/plain",
  ];
  readonly ALLOWED_VIDEO_MIME_TYPES: string[] = ["video/mp4"];

  // ========================================
  // PROPRIEDADES PÚBLICAS - Upload de Arquivos
  // ========================================

  // Estados de Upload
  uploadStepConfirm: boolean = false;
  selectedUploadFile: File | null = null;
  viewerOpen: boolean = false;
  viewerType: "IMG" | "VID" | "DOC" | null = null;
  viewerUrl: string = "";
  viewerTitle: string = "";
  viewerLoading: boolean = false;
  uploadInProgress: boolean = false;
  uploadModalOpen: boolean = false;
  uploadModalType: "IMG" | "DOC" | "VID" | null = null;
  uploadModalDragOver: boolean = false;
  selectedUploadPreviewUrl: string = "";
  selectedUploadPreviewSafeUrl: SafeUrl | null = null;
  stepStatusSolic: "idle" | "loading" | "success" | "error" = "idle";
  stepStatusUpload: "idle" | "loading" | "success" | "error" = "idle";
  stepStatusSend: "idle" | "loading" | "success" | "error" = "idle";
  showActions: boolean = false;
  downloadingFiles: { [key: string]: boolean } = {};

  // ========================================
  // PROPRIEDADES PÚBLICAS - Avaliação
  // ========================================

  rating = 0;
  likeDislike = false;
  avaliAtend = false;

  // ========================================
  // PROPRIEDADES PÚBLICAS - STT (Speech-to-Text)
  // ========================================

  // Estados de Gravação STT
  isRecording: boolean = false;
  mediaRecorder: MediaRecorder | null = null;
  recordedChunks: Blob[] = [];
  recognition: any = null;
  sttTranscript: string = "";

  // ========================================
  // PROPRIEDADES PÚBLICAS - Configurações Lisi
  // ========================================

  lisiConfigPanelOpen: boolean = false;

  // ========================================
  // PROPRIEDADES PRIVADAS - STT
  // ========================================

  private sttErrorOccurred: boolean = false;
  private sttInterim: string = "";
  // VAD (Voice Activity Detection)
  private audioCtx: AudioContext | null = null;
  private analyser: AnalyserNode | null = null;
  private vadInterval: any = null;
  private voiceDetected: boolean = false;
  private sttInterimSub?: Subscription;
  private sttFinalSub?: Subscription;

  // ========================================
  // PROPRIEDADES PRIVADAS - Gerais
  // ========================================

  private token: string = "";
  private hash: string = "";
  private lastConversaLength = 0;
  private ratingDisabled: { [key: string]: boolean } = {};
  private ratingDisableTimers: { [key: string]: any } = {};
  private submittedRatings: { [key: string]: "like" | "dislike" } = {};
  private fileUrlCache: { [key: string]: { url: string; expires: number } } =
    {};

  // ========================================
  // CONSTANTES PRIVADAS
  // ========================================

  private readonly LISI_CONFIG_KEY = "chat:lisiConfig";
  private readonly THEME_STORAGE_KEY = "theme";

  // ========================================
  // CONFIGURAÇÕES PRIVADAS (com getter/setter)
  // ========================================

  private _lisiConfig = {
    tts: true, // Leitura de texto
    stt: true, // Fala para texto
    signLanguage: false, // Libras
    darkMode: false, // Tema escuro
    fontSize: 1.0, // Tamanho da fonte (multiplicador: 0.8 a 1.5)
    autoTts: false, // TTS automático para mensagens da IA
  };

  // Getter/Setter para configurações Lisi
  get lisiConfig() {
    return this._lisiConfig;
  }

  set lisiConfig(value: typeof this._lisiConfig) {
    this._lisiConfig = value;
    this.saveLisiConfig();
  }

  // ========================================
  // MÉTODOS PÚBLICOS - Configurações Lisi
  // ========================================

  toggleLisiConfigPanel() {
    this.lisiConfigPanelOpen = !this.lisiConfigPanelOpen;
  }

  updateLisiConfig(key: keyof typeof this.lisiConfig, value: boolean | number) {
    this._lisiConfig[key] = value as never;
    this.saveLisiConfig();
    if (key === "darkMode") {
      this.applyThemeClass(value ? "dark" : "light");
    }
    if (key === "fontSize") {
      this.applyFontSize(value as number);
    }
  }

  // ========================================
  // MÉTODOS PRIVADOS - Configuração e Persistência
  // ========================================

  private loadLisiConfig() {
    try {
      let saved = localStorage.getItem(this.LISI_CONFIG_KEY);
      if (!saved) {
        // Fallback para sessionStorage se localStorage não estiver disponível (ex.: restrições de 3rd-party)
        try {
          saved = sessionStorage.getItem(this.LISI_CONFIG_KEY) || saved;
        } catch {}
      }
      if (saved) {
        this.lisiConfig = { ...this.lisiConfig, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.warn("Erro ao carregar configurações Lisi:", e);
    }
  }

  private saveLisiConfig() {
    try {
      localStorage.setItem(
        this.LISI_CONFIG_KEY,
        JSON.stringify(this.lisiConfig)
      );
    } catch (e) {
      console.warn("Erro ao salvar configurações Lisi:", e);
      // Fallback: tenta persistir em sessionStorage
      try {
        sessionStorage.setItem(
          this.LISI_CONFIG_KEY,
          JSON.stringify(this.lisiConfig)
        );
      } catch {}
    }
  }

  // === Tema (Light/Dark) ===
  // Sistema de temas dinâmicos baseado em variáveis CSS
  // Quando "dark" é adicionado ao :root, todas as variáveis mudam automaticamente
  private applyThemeClass(mode: "light" | "dark"): void {
    try {
      const body = document.body;
      const root = document.documentElement;
      body.classList.remove("light", "dark");
      root.classList.remove("light", "dark");
      body.classList.add(mode);
      root.classList.add(mode);
      try {
        localStorage.setItem(this.THEME_STORAGE_KEY, mode);
      } catch {}
      try {
        sessionStorage.setItem(this.THEME_STORAGE_KEY, mode);
      } catch {}
    } catch {}
  }

  // === Tamanho da Fonte ===
  // Controla dinamicamente o tamanho da fonte através de variável CSS
  private applyFontSize(scale: number): void {
    try {
      const root = document.documentElement;
      root.style.setProperty("--font-scale", scale.toString());
    } catch {}
  }

  private initThemeFromStorage(): void {
    try {
      let stored = null as string | null;
      try {
        stored = localStorage.getItem(this.THEME_STORAGE_KEY);
      } catch {}
      if (!stored) {
        try {
          stored = sessionStorage.getItem(this.THEME_STORAGE_KEY);
        } catch {}
      }
      let dark = this.lisiConfig.darkMode;
      if (stored === "dark") dark = true;
      if (stored === "light") dark = false;
      this._lisiConfig.darkMode = dark;
      this.saveLisiConfig();
      this.applyThemeClass(dark ? "dark" : "light");
      this.applyFontSize(this.lisiConfig.fontSize);
    } catch {
      this.applyThemeClass(this.lisiConfig.darkMode ? "dark" : "light");
      this.applyFontSize(this.lisiConfig.fontSize);
    }
  }

  // ========================================
  // MÉTODOS PÚBLICOS - STT (Speech-to-Text)
  // ========================================

  async startSttRecording() {
    console.log("🎙️ [STT] Iniciando gravação de voz...");
    if (!this.lisiConfig.stt) {
      console.log("🎙️ [STT] STT desativado nas configurações");
      return;
    }
    try {
      await this.speechToTextService.start();
      this.isRecording = true;
      console.log("🎙️ [STT] Gravação iniciada");
    } catch (e) {
      console.error("Erro ao iniciar gravação STT:", e);
      this.isRecording = false;
    }
  }

  async stopSttRecording() {
    console.log("🎙️ [STT] Parando gravação...");
    this.isRecording = false;
    const res = await this.speechToTextService.stop();
    console.log(
      "🎙️ [STT] Gravação parada. Transcrição final:",
      (res.transcript || "").trim(),
      "| Parcial acumulada:",
      (res.interimTranscript || "").trim()
    );

    if (res.dataUrl) {
      // Salva em sessionStorage (independente de ter transcrição)
      try {
        const voiceMsgs = this.getVoiceMessages();
        const voiceMsg = {
          id: uuidv4(),
          ts: new Date().toISOString(),
          dataUrl: res.dataUrl,
          mime: res.mime || "audio/webm",
          transcript: (res.transcript || "").trim(),
          hasVoice: !!res.hasVoice,
        };
        voiceMsgs.push(voiceMsg);
        sessionStorage.setItem("chat:voiceMsgs", JSON.stringify(voiceMsgs));
        console.log("🎙️ [STT] Mensagem de voz salva no sessionStorage");
      } catch (e) {
        console.warn("🎙️ [STT] Erro ao salvar mensagem de voz:", e);
      }

      // Cria balão de voz
      const voiceMessage = {
        olmId: uuidv4(),
        olmStatus: res.error ? "E" : "P",
        olmDataHoraEnvio: new Date().toISOString(),
        olmDatahoraRegistro: new Date().toISOString(),
        olmProtocoloConversa: this.protocolo,
        afiCodigo: this.salaPrincipal.afiCodigo,
        olmMensagemCliente: "",
        olmRespostaIa: "",
        olmTipo: "US",
        usuId: this.userId,
        para: this.salaPrincipal.usuId,
        audioUrl: res.dataUrl,
        audioMimeType: res.mime || "audio/webm",
        transcript: (res.transcript || "").trim(),
        hasVoice: !!res.hasVoice,
      } as any;

      this.conversaSala.push(voiceMessage);
      this.roleConversaParaFinal();
      this.updateWaitingForResponse();
      console.log(
        "🎙️ [STT] Balão de voz criado e exibido na conversa. Status:",
        voiceMessage.olmStatus
      );

      const transcript = (res.transcript || res.interimTranscript || "").trim();
      if (transcript) {
        console.log(
          "📤 [STT->MSG] Transcrição disponível. Enviando ao socket sem criar novo balão de texto...",
          transcript
        );
        this.hasUserInteracted = true; // Marca interação via voz
        const { socketPayload } = this.criarPayloadMensagem(transcript);
        this.enviarMensagemAoSocket(socketPayload);
      } else {
        const fallback = "Não entendi, poderia repetir novamente?";
        console.log("🤖 [Lisi] Sem transcrição. Mostrando fallback:", fallback);
        this.hasUserInteracted = true; // Marca interação via voz (mesmo sem transcrição)
        const lisiMessage = {
          olmId: uuidv4(),
          olmStatus: "A",
          olmDataHoraEnvio: new Date().toISOString(),
          olmDatahoraRegistro: new Date().toISOString(),
          olmProtocoloConversa: this.protocolo,
          afiCodigo: this.salaPrincipal.afiCodigo,
          olmMensagemCliente: "",
          olmRespostaIa: fallback,
          olmTipo: "IA",
          usuId: this.userId,
          para: this.salaPrincipal.usuId,
          htmlFormatado: this.formatarTextoSimples(fallback),
        };
        this.conversaSala.push(lisiMessage);
        this.roleConversaParaFinal();
        this.updateWaitingForResponse();
      }
    }
  }

  toggleSttRecording() {
    console.log(
      "🎙️ [TOGGLE] Botão de STT clicado. Estado atual:",
      this.isRecording ? "GRAVANDO" : "PARADO"
    );
    if (this.isRecording) {
      console.log("🎙️ [TOGGLE] Parando gravação...");
      this.stopSttRecording();
    } else {
      console.log("🎙️ [TOGGLE] Iniciando gravação...");
      this.startSttRecording();
    }
  }

  // === Métodos auxiliares para áudio ===
  private blobToDataUrl(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(String(reader.result || ""));
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }

  private getVoiceMessages(): any[] {
    try {
      const stored = sessionStorage.getItem("chat:voiceMsgs");
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.warn("Erro ao carregar mensagens de voz:", e);
      return [];
    }
  }

  private getLastVoiceMessage(): any {
    // Retorna a última mensagem de voz da conversa (mais recente)
    for (let i = this.conversaSala.length - 1; i >= 0; i--) {
      const msg = this.conversaSala[i];
      if (msg.audioUrl && msg.audioMimeType && msg.olmTipo === "US") {
        return msg;
      }
    }
    return null;
  }

  /**
   * Reaplica áudios salvos no sessionStorage aos balões de texto equivalentes após reload.
   * - Se encontrar uma mensagem US com o mesmo texto da transcrição, converte-a em balão de áudio.
   * - Caso não encontre, cria um novo balão de áudio no final.
   */
  private reconciliarAudiosDaSessao(): void {
    try {
      const list = this.getVoiceMessages();
      if (!Array.isArray(list) || list.length === 0) return;

      let reconciliados = 0;
      for (const v of list) {
        const transcript = String(v?.transcript || "").trim();
        const dataUrl = String(v?.dataUrl || "");
        const mime = String(v?.mime || "audio/webm");
        if (!dataUrl) continue;

        if (transcript) {
          const sanitized = this.sanitizeInputField(transcript);
          const idx = this.conversaSala.findIndex(
            (m: any) =>
              m?.olmTipo === "US" &&
              !m?.audioUrl &&
              String(m?.olmMensagemCliente || "").trim() === sanitized
          );
          if (idx !== -1) {
            this.conversaSala[idx] = {
              ...this.conversaSala[idx],
              audioUrl: dataUrl,
              audioMimeType: mime,
              transcript: transcript,
            };
            reconciliados++;
            continue;
          }
        }

        // Não encontrou mensagem a substituir: cria um balão de voz ao final
        const voiceMsg = {
          olmId: uuidv4(),
          olmStatus: "A",
          olmDataHoraEnvio: new Date().toISOString(),
          olmDatahoraRegistro: new Date().toISOString(),
          olmProtocoloConversa: this.protocolo,
          afiCodigo: this.salaPrincipal.afiCodigo,
          olmMensagemCliente: "",
          olmRespostaIa: "",
          olmTipo: "US",
          usuId: this.userId,
          para: this.salaPrincipal.usuId,
          audioUrl: dataUrl,
          audioMimeType: mime,
          transcript: transcript,
        };
        this.conversaSala.push(voiceMsg);
      }

      if (reconciliados > 0) {
        this.roleConversaParaFinal();
        this.updateWaitingForResponse();
      }
    } catch (e) {
      console.warn("Erro ao reconciliar áudios da sessão:", e);
    }
  }

  private replaceVoiceMessageWithText(voiceMessage: any, text: string): void {
    console.log("🔄 [VOICE] Substituindo mensagem de voz por texto:", text);
    // Substitui a mensagem de voz por uma mensagem de texto
    const index = this.conversaSala.findIndex(
      (msg) => msg.olmId === voiceMessage.olmId
    );
    console.log("🔄 [VOICE] Índice da mensagem de voz:", index);
    if (index !== -1) {
      const textMessage = {
        olmId: uuidv4(),
        olmStatus: "P",
        olmDataHoraEnvio: new Date().toISOString(),
        olmDatahoraRegistro: new Date().toISOString(),
        olmProtocoloConversa: this.protocolo,
        afiCodigo: this.salaPrincipal.afiCodigo,
        olmMensagemCliente: text,
        olmRespostaIa: "",
        olmTipo: "US",
        usuId: this.userId,
        para: this.salaPrincipal.usuId,
        htmlFormatado: this.formatarTextoSimples(text),
      };

      // Substitui a mensagem de voz pela mensagem de texto
      console.log(
        "🔄 [VOICE] Substituindo mensagem de voz por texto na posição",
        index
      );
      this.conversaSala[index] = textMessage;
      this.updateWaitingForResponse();

      // Envia a mensagem de texto para o socket
      console.log("🔄 [VOICE] Criando payload para envio ao socket");
      const { socketPayload } = this.criarPayloadMensagem(text);
      this.enviarMensagemAoSocket(socketPayload);
      console.log("🔄 [VOICE] Mensagem de texto enviada ao socket");
    } else {
      console.log("🔄 [VOICE] Mensagem de voz não encontrada para substituir");
    }
  }

  hasPendingVoiceMessage(): boolean {
    const last = this.getLastVoiceMessage();
    if (!last) return false;
    // Considera pendente apenas quando há transcrição e ainda não recebemos ACK (status P)
    const hasTranscript = !!(
      last.transcript && String(last.transcript).trim().length > 0
    );
    return hasTranscript && last.olmStatus === "P";
  }

  constructor(
    private route: ActivatedRoute,
    private chat: ChatSocketService,
    private notificacaoService: NotificacaoService,
    private sanitizer: DomSanitizer,
    private ratingService: RatingService,
    private emojiService: EmojiService,
    private atendimentoHumanizadoService: AtendimentoHumanizadoService,
    public speechSynthesisService: SpeechSynthesisService,
    private speechToTextService: SpeechToTextService
  ) {}

  // ========================================
  // MÉTODOS DO CICLO DE VIDA - Angular Lifecycle
  // ========================================

  /**
   * Método de ciclo de vida do Angular. Inicia a configuração do chat.
   */
  ngOnInit(): void {
    this.inicializarChat();
    this.loadLisiConfig();
    this.initThemeFromStorage();
    // this.configurarListenerCliqueFora();
    // Subs para debug de parciais/finais do STT
    this.sttInterimSub = this.speechToTextService.interim$.subscribe((t) => {
      try {
        console.log("🎙️ [STT] Transcrição parcial:", t);
      } catch {}
    });
    this.sttFinalSub = this.speechToTextService.final$.subscribe((t) => {
      try {
        console.log("🎙️ [STT] Transcrição final acumulada:", t);
      } catch {}
    });
  }

  /**
   * Método de ciclo de vida do Angular. Garante que timers sejam limpos ao destruir o componente.
   */
  ngOnDestroy(): void {
    Object.values(this.ratingDisableTimers).forEach(
      (t) => t && clearTimeout(t)
    );
    this.ratingDisableTimers = {};

    // Cleanup STT resources
    if (this.isRecording) {
      this.stopSttRecording();
    }
    try {
      this.sttInterimSub?.unsubscribe();
    } catch {}
    try {
      this.sttFinalSub?.unsubscribe();
    } catch {}
  }

  /**
   * Método de ciclo de vida do Angular. Usado para iniciar timers de avaliação para mensagens visíveis.
   */
  ngAfterViewChecked(): void {
    if (this.conversaSala.length !== this.lastConversaLength) {
      this.lastConversaLength = this.conversaSala.length;
      this.startTimersForVisibleIAs();
    }
  }

  // ========================================
  // MÉTODOS PRIVADOS - Inicialização e Configuração
  // ========================================

  /**
   * Orquestra a inicialização do componente, configurando listeners e iniciando a sessão do chat.
   */
  private inicializarChat(): void {
    this.clientKey = "49fa27aab4f70b8eaacf";
    this.isSouceVisible =
      this.route.snapshot.queryParamMap.get("source") === "true";
    this.token = this.route.snapshot.queryParamMap.get("token") || "";
    this.hash = this.route.snapshot.queryParamMap.get("hash") || "";

    // Configurar cores baseado no clientKey
    // this.configurarCoresPorClientKey();

    // Componente exclusivo para Lisi
    this.salaPrincipal.afiCodigo = "DETAL001";

    this.configurarListenersSocket();
    this.configurarListenersReconexao();

    this.protocolo = sessionStorage.getItem("protocoloChat");

    if (this.protocolo) {
      this.reconectarSessaoExistente();
    } else {
      this.iniciarNovaSessao();
    }
  }

  /**
   * Configura as variáveis CSS de cores para Lisi.
   */
  // private configurarCoresPorClientKey(): void {
  //   const root = document.documentElement;

  //   // Cores padrão azuis para Lisi
  //   root.style.setProperty("--primary-color-darker", "#1B365C");
  //   root.style.setProperty("--primary-color", "#0C5DA8");
  //   root.style.setProperty("--background-box-receive", "#7EA1C4");
  //   root.style.setProperty("--color-box-receive", "#7EA1C4");

  //   // Mantém a cor do box de envio sempre branca
  //   root.style.setProperty("--color-box-send", "#fff");
  // }

  /**
   * Configura todos os listeners para eventos recebidos via WebSocket.
   */
  private configurarListenersSocket(): void {
    this.chat.onClienteConfigurado().subscribe(() => {
      this.socketConfigurado = true;
      // console.log("Socket configurado e pronto para enviar mensagens");
    });

    this.chat.onPosicaoFila().subscribe(({ posicao }) => {
      this.notificacaoService.notificar("Posição atualizada", `${posicao}º`);
      this.posicao = posicao;
    });

    this.chat.onInicioAtendimento().subscribe(({ atendenteId }) => {
      this.atendenteId = atendenteId;
      this.estaEsperandoAtendimento = false;
      this.atendimentoHumanoAtivo = true;
      this.notificacaoService.notificar(
        "Atendimento iniciado",
        "Atendente entrou na sala de atendimento."
      );
    });

    // this.chat.onFinalizaAtendimento().subscribe(() => {
    //   this.chatEnd = true;
    //   this.likeDislike = true;
    //   this.roleConversaParaFinal();
    //   this.notificacaoService.notificar("Atendimento finalizado", "");
    //   this.chat.disconnect();
    // });

    this.chat.onFinalizaAtendimento().subscribe(() => {
      this.chatEnd = true;
      this.likeDislike = true;

      // Remove o protocolo inválido imediatamente para evitar reconexão após um F5.
      sessionStorage.removeItem("protocoloChat");

      this.roleConversaParaFinal();
      this.notificacaoService.notificar("Atendimento finalizado", "");
      this.chat.disconnect();
    });

    this.chat
      .onMensagemRecebida()
      .subscribe((msg) => this.processarMensagemRecebida(msg));
  }

  /**
   * Inicia uma nova sessão de chat, gerando um novo protocolo.
   */
  private iniciarNovaSessao(): void {
    this.chat.PostGeraWebchatSession(this.clientKey).subscribe((res: any) => {
      if (res.protocolo) {
        this.protocolo = res.protocolo;
        sessionStorage.setItem("protocoloChat", this.protocolo!);
        this.ratingService.setProtocolMessage(this.protocolo!);
        this.obterSalaEConectar(this.token, this.hash);
      }
    });
  }

  /**
   * Reconecta a uma sessão de chat existente usando o protocolo salvo.
   */
  private reconectarSessaoExistente(): void {
    this.ratingService.setProtocolMessage(this.protocolo!);
    this.obterSalaEConectar(this.token, this.hash);
  }

  /**
   * Sanitiza o input do usuário para evitar injeção de código.
   * @param input O texto a ser sanitizado.
   */
  private sanitizeInputField(input: string): string {
    if (!input) return "";
    // Converte emojis visuais para unicode literal (para persistência)
    let sanitized = this.emojiService.convertEmojisToUnicode(input);
    sanitized = sanitized.replace(/\\/g, "\\\\"); // escapa barra
    sanitized = sanitized.replace(/\//g, "\\/"); // escapa barra normal
    sanitized = sanitized.replace(/\"/g, "&quot;"); // aspas duplas já escapadas
    sanitized = sanitized.replace(/"/g, "&quot;"); // aspas duplas
    sanitized = sanitized.replace(/'/g, "&#39;"); // aspas simples
    sanitized = sanitized.replace(/\{/g, "&#123;"); // chaves esquerda
    sanitized = sanitized.replace(/\}/g, "&#125;"); // chaves direita
    sanitized = sanitized.replace(/\[/g, "&#91;"); // colchete esquerdo
    sanitized = sanitized.replace(/\]/g, "&#93;"); // colchete direito
    sanitized = sanitized.replace(/</g, "&lt;"); // menor
    sanitized = sanitized.replace(/>/g, "&gt;"); // maior
    return sanitized;
  }

  /**
   * Inicia timers de desabilitação de avaliação para todas as mensagens IA visíveis.
   */
  private startTimersForVisibleIAs(): void {
    for (const msg of this.conversaSala) {
      if (msg?.olmTipo === "IA" && msg?.olmId) {
        this.scheduleRatingDisableForMessage(msg);
      }
    }
  }

  /**
   * Método para configurar listeners de reconexão.
   */
  private configurarListenersReconexao(): void {
    // Listener para reconexão automática
    this.chat.getConnectionStatus().subscribe(() => {
      // console.log('Socket reconectado automaticamente');
    });

    // Listener para desconexão
    this.chat.getDisconnectionStatus().subscribe(() => {
      // console.log('Socket desconectado');
      this.tentarReconectar();
    });
  }

  /**
   * Método para tentar reconectar quando desconectar.
   */
  private tentarReconectar(): void {
    // Adicione esta verificação no início do método
    if (this.chatEnd) {
      console.log(
        "Desconexão intencional ao final do atendimento. Reconexão abortada."
      );
      return;
    }

    const protoSession = sessionStorage.getItem("protocoloChat");
    if (protoSession && this.userId && this.clientKey) {
      console.log("Tentando reconectar...");
      setTimeout(() => {
        this.chat
          .reconectarComProtocolo(this.protocolo!, this.userId!, this.clientKey)
          .then(() => {
            console.log("Reconexão bem-sucedida");
          })
          .catch((error) => {
            console.error("Erro na reconexão:", error);
            // Tenta novamente após 5 segundos
            setTimeout(() => this.tentarReconectar(), 5000);
          });
      }, 2000); // Aguarda 2 segundos antes de tentar reconectar
    }
  }

  /**
   * Agenda a desabilitação dos botões de avaliação após um tempo específico.
   * @param msg A mensagem IA que contém avaliação.
   */
  private scheduleRatingDisableForMessage(msg: any): void {
    const messageId = msg?.olmId;
    if (!messageId) return;
    if (this.ratingDisableTimers[messageId]) {
      clearTimeout(this.ratingDisableTimers[messageId]);
      delete this.ratingDisableTimers[messageId];
    }
    const sentMs = this.getMessageSentTimeMs(msg);
    if (!sentMs) {
      this.ratingDisabled[messageId] = true;
      return;
    }
    const now = Date.now();
    const elapsed = now - sentMs;
    const maxWindow = 60000;
    const remaining = maxWindow - elapsed;
    if (remaining <= 0) {
      this.ratingDisabled[messageId] = true;
    } else {
      this.ratingDisabled[messageId] = false;
      this.ratingDisableTimers[messageId] = setTimeout(() => {
        this.ratingDisabled[messageId] = true;
      }, remaining + 10);
    }
  }

  /**
   * Obtém o timestamp de envio de uma mensagem.
   * @param msg A mensagem.
   */
  private getMessageSentTimeMs(msg: any): number | null {
    const v = msg?.olmDatahoraRegistro;
    if (!v || typeof v !== "string") return null;
    if (/\d{4}-\d{2}-\d{2}T/.test(v)) {
      const d = new Date(v);
      return isNaN(d.getTime()) ? null : d.getTime();
    }
    const m = v.match(/(\d{2})\.(\d{2})\.(\d{4}) (\d{2}):(\d{2}):(\d{2})/);
    if (m) {
      const [, dd, MM, yyyy, hh, mm, ss] = m;
      const d = new Date(
        Number(yyyy),
        Number(MM) - 1,
        Number(dd),
        Number(hh),
        Number(mm),
        Number(ss)
      );
      return isNaN(d.getTime()) ? null : d.getTime();
    }
    const d = new Date(v);
    return isNaN(d.getTime()) ? null : d.getTime();
  }

  /**
   * Busca as informações da sala de chat e conecta o socket, opcionalmente preservando a conversa atual.
   * @param token Token de autenticação.
   * @param hash Hash de validação.
   * @param preservarConversa Se true, não apaga as mensagens atuais da tela.
   */
  private obterSalaEConectar(
    token: string,
    hash: string,
    preservarConversa = false
  ): void {
    this.estaCarregandoSala = true;
    this.chat
      .GetInfoChat(token, hash)
      .pipe(finalize(() => (this.estaCarregandoSala = false)))
      .subscribe((data) => {
        if (data.chmStatus !== "F") {
          this.salaPrincipal = data;
          this.userId = String(data.cliId);

          const conectarPromise =
            sessionStorage.getItem("protocoloChat") && !preservarConversa
              ? this.chat.reconectarComProtocolo(
                  this.protocolo!,
                  this.userId,
                  this.clientKey
                )
              : this.chat.clienteEntrarFila(
                  this.protocolo!,
                  this.userId,
                  this.clientKey
                );

          conectarPromise.then((historico) => {
            if (historico.erros !== true) {
              this.salaPrincipal = {
                ...this.salaPrincipal,
                ombProtocolo: this.protocolo,
              };

              // console.log(this.salaPrincipal);

              if (!preservarConversa) {
                this.atendimentoHumanoAtivo = false;
                this.conversaSala = historico.retorno.map((msg: any) => {
                  this.prepareMessageForRendering(msg);
                  return msg;
                });
                this.startTimersForVisibleIAs();
                // Após carregar histórico inicial, tenta reconciliar áudios salvos em sessão
                setTimeout(() => this.reconciliarAudiosDaSessao(), 0);
              }
              this.estaEsperandoAtendimento = historico.sts === "E";
            }
          });
          this.estaCarregandoPagina = false;
        }
      });
  }

  /**
   * Reinicia a sessão de chat se a página foi marcada para reset.
   * Usado principalmente após o término de um atendimento.
   */
  private async reiniciarSessao(): Promise<void> {
    if (sessionStorage.getItem("resetPage")) {
      try {
        const novaSessao: any = await firstValueFrom(
          this.chat.PostGeraWebchatSession(this.clientKey)
        );
        if (novaSessao?.protocolo) {
          sessionStorage.removeItem("resetPage");
          this.chat.disconnect();
          this.socketConfigurado = false;

          this.protocolo = novaSessao.protocolo;
          sessionStorage.setItem("protocoloChat", this.protocolo!);
          this.ratingService.setProtocolMessage(this.protocolo!);

          // Reseta o estado do atendimento anterior
          this.atendenteId = null;
          this.chatEnd = false;
          this.likeDislike = false;
          this.avaliAtend = false;
          this.estaEsperandoAtendimento = false;

          // Reconecta mantendo o histórico de conversa na tela
          this.obterSalaEConectar(this.token, this.hash, true);
        }
      } catch (error) {
        console.error("Erro ao gerar novo protocolo do webchat.", error);
      }
    }
  }

  // ========================================
  // MÉTODOS PRIVADOS - Processamento de Mensagens
  // ========================================

  /**
   * Processa uma mensagem recebida do WebSocket.
   * @param msgRaw A mensagem bruta recebida.
   */
  private processarMensagemRecebida(msgRaw: any): void {
    const msg = Array.isArray(msgRaw) ? msgRaw[1] : msgRaw;
    if (!msg) return;

    this.verificarHandoff(msg);

    // Se a mensagem for do tipo botão (BT) e contiver múltiplas respostas, cria uma bolha para cada uma.
    if (
      msg.olmTipo === "BT" &&
      Array.isArray(msg.olmRespostaIa) &&
      msg.olmRespostaIa.length > 1
    ) {
      msg.olmRespostaIa.forEach((resposta: any, idx: number) => {
        const part: any = {
          ...msg,
          olmId: `${msg.olmId || uuidv4()}-${idx + 1}`,
          olmRespostaIa: resposta,
        };
        this.adicionarOuAtualizarMensagem(part);
      });
      this.roleConversaUmPoucoAbaixo();
      return;
    }

    if (this.deveIgnorarMensagem(msg)) return;

    this.adicionarOuAtualizarMensagem(msg);

    if (msg.olmTipo === "IA" || msg.olmTipo === "US") {
      this.disablePreviousBTButtons();
    }

    if (msg.olmTipo !== "US") {
      this.notificacaoService.notificar("Mensagem recebida", msg.olmMensagemIa);
    }

    // TTS automático para mensagens da IA (Lisi) - apenas após interação do usuário
    // Inclui respostas para: mensagens digitadas, mensagens transcritas (STT),
    // seleções de botões, uploads de arquivos, interações por voz
    // console.log('🎵 [TTS AUTO] Verificando condições:', {
    //   tipo: msg.olmTipo,
    //   isIA: msg.olmTipo === "IA",
    //   isAT: msg.olmTipo === "AT",
    //   autoTts: this.lisiConfig.autoTts,
    //   tts: this.lisiConfig.tts,
    //   hasInteracted: this.hasUserInteracted,
    //   resposta: msg.olmRespostaIa?.substring(0, 30)
    // });

    if ((msg.olmTipo === "IA" || msg.olmTipo === "AT" || msg.olmTipo === "BT") && this.lisiConfig.autoTts && this.lisiConfig.tts && this.hasUserInteracted) {
      console.log('🎵 [TTS AUTO] ✅ Condições atendidas - ativando TTS automático');
      setTimeout(() => {
        console.log('🎵 [TTS AUTO] Executando toggleTtsMessage...');
        this.speechSynthesisService.toggleTtsMessage(msg, this.lisiConfig.tts, this.clientKey);
      }, 1000); // Delay ainda menor para resposta mais rápida
    } else {
      console.log('🎵 [TTS AUTO] ❌ Condições NÃO atendidas');
    }

    this.roleConversaUmPoucoAbaixo();
  }

  /**
   * Adiciona uma nova mensagem à lista de conversa ou atualiza uma existente.
   * @param msg A mensagem a ser adicionada ou atualizada.
   */
  private adicionarOuAtualizarMensagem(msg: any): void {
    this.prepareMessageForRendering(msg);
    const index = this.conversaSala.findIndex(
      (m: any) => m.olmId === msg.olmId && m.olmTipo === msg.olmTipo
    );

    if (index !== -1) {
      this.conversaSala[index] = { ...this.conversaSala[index], ...msg };
    } else {
      // Evita duplicar eco de mensagens do próprio usuário: se vier 'US' do socket
      // e já existe uma mensagem local pendente ('P') com o mesmo texto, apenas atualiza
      if (
        msg?.olmTipo === "US" &&
        (msg?.olmMensagemCliente || "").trim().length > 0
      ) {
        // 1) Caso: reconciliar com texto digitado pendente
        const sameTextIdx = [...this.conversaSala]
          .reverse()
          .findIndex(
            (m: any) =>
              m?.olmTipo === "US" &&
              m?.olmStatus === "P" &&
              (m?.olmMensagemCliente || "").trim() ===
                (msg?.olmMensagemCliente || "").trim()
          );
        if (sameTextIdx !== -1) {
          const realIdx = this.conversaSala.length - 1 - sameTextIdx;
          this.conversaSala[realIdx] = {
            ...this.conversaSala[realIdx],
            olmId: msg.olmId,
            olmStatus: "A",
            olmDataHoraEnvio:
              msg.olmDataHoraEnvio ||
              this.conversaSala[realIdx].olmDataHoraEnvio,
          };
          this.updateWaitingForResponse();
          return;
        }

        // 2) Caso: a mensagem é eco do texto enviado pela transcrição de voz
        // Procura o último balão de voz do usuário com a mesma transcrição e reconcilia status
        const sameTranscriptIdx = [...this.conversaSala]
          .reverse()
          .findIndex(
            (m: any) =>
              m?.olmTipo === "US" &&
              m?.audioUrl &&
              (m?.transcript || "").trim() ===
                (msg?.olmMensagemCliente || "").trim()
          );
        if (sameTranscriptIdx !== -1) {
          const realIdx = this.conversaSala.length - 1 - sameTranscriptIdx;
          // Atualiza status do balão de voz para "A" e não cria balão de texto
          this.conversaSala[realIdx] = {
            ...this.conversaSala[realIdx],
            olmStatus: "A",
          };
          this.updateWaitingForResponse();
          return;
        }
      }

      this.conversaSala.push(msg);
    }

    if (msg.olmTipo === "IA") {
      this.scheduleRatingDisableForMessage(msg);
    }
    if (msg.olmTipo === "AT") {
      this.atendimentoHumanoAtivo = true;
    }

    // console.log("Mensagem adicionada ou atualizada:", msg);

    // Update waiting status
    this.updateWaitingForResponse();
  }

  // ========================================
  // MÉTODOS PÚBLICOS - Principais Funcionalidades do Chat
  // ========================================

  /**
   * Envia a mensagem digitada pelo usuário.
   */
  async enviarMensagem(): Promise<void> {
    console.log("📤 [MSG] Iniciando envio de mensagem...");
    this.hasUserInteracted = true; // Marca que o usuário interagiu
    await this.reiniciarSessao();

    let textoParaEnviar = this.mensagem.trim();
    let fromVoiceTranscript = false;
    console.log("📤 [MSG] Texto do input:", textoParaEnviar || "(vazio)");

    // Se não há texto no input, verifica se há uma mensagem de voz pendente
    if (!textoParaEnviar) {
      const lastVoiceMessage = this.getLastVoiceMessage();
      console.log(
        "📤 [MSG] Verificando mensagem de voz pendente:",
        !!lastVoiceMessage
      );
      if (lastVoiceMessage && lastVoiceMessage.transcript) {
        textoParaEnviar = lastVoiceMessage.transcript;
        fromVoiceTranscript = true;
        console.log(
          "📤 [MSG] Usando transcrição da voz (sem criar balão de texto):",
          textoParaEnviar
        );
      }
    }

    if (textoParaEnviar) {
      console.log("📤 [MSG] Enviando texto:", textoParaEnviar);
      const { displayMessage, socketPayload } =
        this.criarPayloadMensagem(textoParaEnviar);

      if (fromVoiceTranscript) {
        // Se veio da voz, não cria novo balão; apenas envia
        this.enviarMensagemAoSocket(socketPayload);
        console.log("📤 [MSG] Enviado ao socket sem criar balão (origem: voz)");
      } else {
        // Fluxo normal digitado: cria balão
        this.conversaSala.push(displayMessage);
        this.updateWaitingForResponse();
        this.mensagem = "";
        this.disablePreviousBTButtons();
        this.roleConversaParaFinal();
        this.enviarMensagemAoSocket(socketPayload);
        console.log("📤 [MSG] Mensagem enviada para o socket");
      }
    } else {
      console.log("📤 [MSG] Nada para enviar (sem texto nem voz pendente)");
    }
  }

  /**
   * Tenta reenviar uma mensagem que falhou.
   * @param msg A mensagem a ser reenviada.
   */
  reenviarMsg(msg: any): void {
    const index = this.conversaSala.findIndex(
      (m: any) => m.olmId === msg.olmId
    );
    if (index !== -1) {
      this.conversaSala[index].olmStatus = "P"; // Pendente
    }

    const socketPayload = {
      id: msg.olmId,
      protocolo: this.protocolo,
      tipo: msg.olmTipo,
      de: msg.usuId || this.userId || "",
      para: msg.para,
      texto: msg.olmMensagemCliente || msg.olmRespostaIa,
      dataHora: msg.olmDataHoraEnvio,
      afiCodigo: msg.afiCodigo,
    };

    this.enviarMensagemAoSocket(socketPayload, true);
  }

  /**
   * Encapsula a lógica de envio da mensagem para o socket, aguardando a configuração se necessário.
   * @param payload O objeto da mensagem a ser enviado.
   * @param isRetry Indica se é uma tentativa de reenvio.
   */
  private enviarMensagemAoSocket(payload: any, isRetry = false): void {
    const enviar = () => {
      this.chat
        .enviarMensagem(payload)
        .then((dadosRetorno: any) => {
          const index = this.conversaSala.findIndex(
            (m: any) => m.olmId === payload.id
          );
          if (index !== -1) this.conversaSala[index].olmStatus = "A"; // Aceito

          // Se a resposta do socket contiver novas mensagens (menus, etc.), processa e adiciona.
          if (dadosRetorno?.mensagemRetorno) {
            this.processarRespostaComMenu(dadosRetorno);
          }
        })
        .catch(() => {
          const index = this.conversaSala.findIndex(
            (m: any) => m.olmId === payload.id
          );
          if (index !== -1) this.conversaSala[index].olmStatus = "N"; // Não enviado
        });
    };

    if (this.socketConfigurado) {
      enviar();
    } else {
      // console.log("Aguardando socket ser configurado...");
      const sub = this.chat.onClienteConfigurado().subscribe(() => {
        this.socketConfigurado = true;
        enviar();
        sub.unsubscribe();
      });
    }
  }

  /**
   * Processa a resposta do servidor que contém menus ou mensagens automáticas.
   * @param dadosRetorno Os dados retornados pelo socket após o envio de uma mensagem.
   */
  private processarRespostaComMenu(dadosRetorno: any): void {
    for (let item of dadosRetorno.mensagemRetorno) {
      const novaMsg = {
        olmId: dadosRetorno.olmMenu || uuidv4(),
        olmStatus: "A",
        olmDataHoraEnvio: dadosRetorno.olmDataHoraEnvio,
        olmProtocoloConversa: this.protocolo,
        olmDatahoraRegistro: dadosRetorno.olmDatahoraRegistro,
        afiCodigo: dadosRetorno.afiCodigo,
        olmMensagemCliente: "",
        olmRespostaIa: item.menu ? JSON.stringify(item) : item.message,
        olmTipo: "BT",
        usuId: dadosRetorno.usuId,
        omeId: item.menu ? 1 : undefined,
      };
      this.adicionarOuAtualizarMensagem(novaMsg);
    }
  }

  /**
   * Cria os objetos de payload para o socket e para exibição na tela.
   * @param texto O conteúdo da mensagem.
   * @param extras Dados adicionais, como `buttonId` e `reference`.
   * @returns Um objeto contendo `displayMessage` e `socketPayload`.
   */
  private criarPayloadMensagem(
    texto: string,
    extras: any = {}
  ): { displayMessage: any; socketPayload: any } {
    const textoSanitizado = this.sanitizeInputField(texto);
    const dataHora = this.formatarDataIsoParaBR(new Date().toISOString());
    const id = uuidv4();
    const afiCodigo = "DETAL001";

    const socketPayload = {
      id,
      protocolo: this.protocolo,
      tipo: "US",
      de: this.userId || "",
      para: this.salaPrincipal.usuId,
      texto: textoSanitizado,
      dataHora,
      afiCodigo,
      ...extras,
    };

    const displayMessage = {
      olmId: id,
      olmStatus: "P", // Pendente
      olmDataHoraEnvio: dataHora,
      olmDatahoraRegistro: dataHora,
      olmProtocoloConversa: this.protocolo,
      afiCodigo,
      olmMensagemCliente: textoSanitizado,
      olmRespostaIa: "",
      olmTipo: "US",
      usuId: this.userId,
      para: this.salaPrincipal.usuId,
      htmlFormatado: this.formatarTextoSimples(texto),
    };

    return { displayMessage, socketPayload };
  }

  // ========================================
  // MÉTODOS PÚBLICOS - Avaliação e Feedback
  // ========================================

  /**
   * Envia a avaliação de satisfação (estrelas) para o servidor.
   */
  // A função agora recebe a avaliação como um parâmetro
  avaliacaoAtendPost(novaAvaliacao: number): void {
    // Se a avaliação já foi enviada, ignora chamadas subsequentes
    if (this.isSubmittingRating) {
      return;
    }
    // Trava a função para evitar novas chamadas
    this.isSubmittingRating = true;

    // IMPORTANTE: Use o parâmetro 'novaAvaliacao' em vez de 'this.rating'
    this.chat
      .PostAvaliacaoAtdFinalizado(
        String(this.salaPrincipal.ombId || ""),
        String(novaAvaliacao), // <-- MUDANÇA PRINCIPAL AQUI
        "",
        this.protocolo!
      )
      .subscribe(
        (res: any) => {
          if (res.erros === false) {
            this.likeDislike = false;
            this.avaliAtend = false;
          }

          setTimeout(() => {
            this.chatEnd = false;
            sessionStorage.clear();
            sessionStorage.setItem("resetPage", "true");
            this.protocolo = null;
            this.isSubmittingRating = false;
          }, 5000);
        },
        (error) => {
          console.error("Erro ao enviar avaliação:", error);
          this.isSubmittingRating = false;
        }
      );
  }

  /**
   * Envia a avaliação inicial (Like/Dislike) sobre a resolução da demanda.
   * @param likeDislike 'S' para sim (like), 'N' para não (dislike).
   */
  avaliacaoLikeDeslike(likeDislike: "S" | "N"): void {
    this.chat
      .PostAvaliacaoAtdFinalizado(
        String(this.salaPrincipal.ombId || ""),
        "",
        likeDislike,
        this.protocolo!
      )
      .subscribe(() => {
        this.likeDislike = false;
        this.avaliAtend = true;
      });
  }

  /**
   * Submete a avaliação (like/dislike) para uma mensagem específica da IA.
   * @param messageId O ID da mensagem sendo avaliada.
   * @param rating O tipo de avaliação ('like' ou 'dislike').
   */
  submitRating(messageId: string, rating: "like" | "dislike"): void {
    if (this.isRatingDisabled(messageId)) return;

    const currentRating = this.getRating(messageId);
    if (currentRating === rating) {
      // Remove a avaliação se o usuário clicar no mesmo botão novamente
      delete this.submittedRatings[messageId];
      this.ratingService
        .sendRating("R", messageId, { protocolMessage: this.protocolo! })
        .subscribe();
    } else {
      this.submittedRatings[messageId] = rating;
      this.ratingService
        .sendRating(rating === "like" ? "L" : "D", messageId, {
          protocolMessage: this.protocolo!,
        })
        .subscribe();
    }
  }

  /**
   * Obtém a avaliação atual para uma mensagem.
   * @param messageId O ID da mensagem.
   * @returns 'like', 'dislike' ou null.
   */
  getRating(messageId: string): "like" | "dislike" | null {
    return this.submittedRatings[messageId] || null;
  }

  /**
   * Verifica se os botões de avaliação para uma mensagem devem estar desabilitados.
   * @param messageId O ID da mensagem.
   */
  isRatingDisabled(messageId: string): boolean {
    return this.ratingDisabled[messageId] === true;
  }

  // ========================================
  // MÉTODOS PRIVADOS - Auxiliares e Utilitários
  // ========================================

  /**
   * Verifica se uma mensagem recebida deve ser ignorada (ex: ecos de mensagens do próprio usuário).
   * @param msg A mensagem a ser verificada.
   */
  private deveIgnorarMensagem(msg: any): boolean {
    return (
      msg &&
      msg.usuId === "US" &&
      msg.olmTipo === "US" &&
      !msg.olmRespostaIa &&
      !msg.olmMensagemCliente
    );
  }

  /**
   * Verifica se a mensagem contém um gatilho para iniciar o atendimento humano.
   * @param msg A mensagem a ser verificada.
   */
  private verificarHandoff(msg: any): void {
    if (msg?.trigger?.toUpperCase() === "ATEND") {
      this.atendimentoHumanoAtivo = true;
    }
    if (Array.isArray(msg?.olmRespostaIa)) {
      if (
        msg.olmRespostaIa.some(
          (item: any) => item?.event?.toUpperCase() === "TR_ATEND"
        )
      ) {
        this.atendimentoHumanoAtivo = true;
      }
    }
  }

  /**
   * Desabilita os botões de mensagens anteriores após uma nova interação.
   */
  private disablePreviousBTButtons(): void {
    this.conversaSala.forEach((m) => {
      if (m?.olmTipo === "BT") {
        m.__btDisabled = true;
      }
    });
  }

  /**
   * Verifica se os botões de uma mensagem específica devem ser desabilitados.
   * @param msg A mensagem contendo os botões.
   */
  isBTDisabled(msg: any): boolean {
    if (!this.isLastBubble(msg)) return true;
    return !!(msg?.olmTipo === "BT" && msg.__btDisabled === true);
  }

  /**
   * Verifica se uma mensagem é a última bolha de diálogo visível no chat.
   * @param msg A mensagem a ser verificada.
   */
  isLastBubble(msg: any): boolean {
    if (!msg || !this.conversaSala?.length) return false;

    const lastVisibleMessage = [...this.conversaSala]
      .reverse()
      .find((m) => m.olmTipo !== "IF");
    return (
      lastVisibleMessage?.olmId === msg.olmId &&
      lastVisibleMessage?.olmTipo === msg.olmTipo
    );
  }

  /**
   * Converte o JSON de uma mensagem do tipo 'BT' em um objeto utilizável.
   * @param msg A mensagem a ser parseada.
   */
  parseBotao(msg: any): any | null {
    if (msg?.olmTipo !== "BT" || !msg.olmRespostaIa) return null;

    let content = msg.olmRespostaIa;
    if (typeof content === "string") {
      try {
        content = JSON.parse(content);
      } catch {
        return null;
      }
    }

    if (Array.isArray(content)) {
      content = content[0];
    }

    if (
      content &&
      typeof content === "object" &&
      (content.menu || content.buttonList)
    ) {
      return content;
    }

    return null;
  }

  roleConversaParaFinal(): void {
    setTimeout(() => {
      const elm = this.scrollRef?.nativeElement;
      if (elm) {
        elm.scrollTop = elm.scrollHeight;
      }
    }, 0);
  }

  roleConversaUmPoucoAbaixo(): void {
    setTimeout(() => {
      const elm = this.scrollRef?.nativeElement;
      if (elm) {
        elm.scrollTop = elm.scrollTop + 195; // desce só 16px
      }
    }, 0);
  }

  formatarHoraSemFuso(dateString: string): string {
    if (/\d{4}-\d{2}-\d{2}T/.test(dateString)) {
      const date = new Date(dateString);
      const horas = String(date.getUTCHours()).padStart(2, "0");
      const minutos = String(date.getUTCMinutes()).padStart(2, "0");
      return `${horas}:${minutos}`;
    }
    const match = dateString.match(
      /(\d{2})\.(\d{2})\.(\d{4}) (\d{2}):(\d{2}):(\d{2})/
    );
    if (match) {
      const [, , , , h, m] = match;
      return `${h}:${m}`;
    }
    const fallback = new Date(dateString);
    const fh = String(fallback.getHours()).padStart(2, "0");
    const fm = String(fallback.getMinutes()).padStart(2, "0");
    return `${fh}:${fm}`;
  }

  formatarDataIsoParaBR(isoString: any) {
    const data = new Date(isoString);
    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const ano = data.getFullYear();
    const hora = String(data.getHours()).padStart(2, "0");
    const minuto = String(data.getMinutes()).padStart(2, "0");
    const segundo = String(data.getSeconds()).padStart(2, "0");
    return `${dia}.${mes}.${ano} ${hora}:${minuto}:${segundo}`;
  }

  /**
   * Formata o texto para exibir no chat com suporte a markdown básico.
   * - **texto** vira <strong>texto</strong>
   * - *texto* vira <i>texto</i>
   * - [texto](url) vira <a href="url" target="_blank">texto</a>
   * - Links funcionam mesmo com caracteres escapados (ex: &#91;Saiba mais&#93;(https:\\\/\\\/...))
   * - Listas não viram <ol> ou <ul>, apenas texto
   * - Quebras de linha viram <br>
   *
   * Exemplos de transformação:
   * - "[Saiba mais](https://www.detran.al.gov.br/conteudo/lgpd)" → <a href="https://www.detran.al.gov.br/conteudo/lgpd" target="_blank">Saiba mais</a>
   * - "&#91;Saiba mais&#93;(https:\\\/\\\/www.detran.al.gov.br\\\/conteudo\\\/lgpd)" → <a href="https://www.detran.al.gov.br/conteudo/lgpd" target="_blank">Saiba mais</a>
   */
  formatarTextoSimples(texto: string): SafeHtml {
    if (!texto) return "";

    // Normaliza sequências escapadas antes de qualquer formatação (inclui conversão para emoji)
    texto = this.decodeEscapedText(texto);

    // Converte unicode literal (\\uXXXX) para emojis visuais (idempotente após normalização)
    try {
      texto = this.emojiService.convertUnicodeToEmojis(texto);
    } catch {}

    // Detecta se é um array JSON e converte para objeto
    const textoTrim = texto.trim();
    if (textoTrim.startsWith("[") && textoTrim.endsWith("]")) {
      try {
        const arr = JSON.parse(textoTrim);
        if (
          Array.isArray(arr) &&
          arr.length === 1 &&
          typeof arr[0] === "object"
        ) {
          texto = JSON.stringify(arr[0]);
        }
      } catch (e) {
        // Se não for JSON válido, segue o fluxo normal
      }
    }

    texto = texto.trim().replace(/^"(.*)"$/, "$1");
    texto = texto.replace(/\\n/g, "\n");
    // Remove barras invertidas extras
    texto = texto.replace(/\\/g, "");

    // Primeiro, converte caracteres HTML escapados de volta para markdown
    texto = texto.replace(/&#91;/g, "[").replace(/&#93;/g, "]");
    texto = texto.replace(/\\\//g, "/").replace(/\\\\/g, "\\");

    // Links markdown [texto](url) => <a>
    texto = texto.replace(
      /\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g,
      '<a target="_blank" class="link-4" href="$2">$1</a>'
    );
    texto = texto.replace(
      /\[([^\]]+)\]\((www\.[^\)]+)\)/g,
      '<a target="_blank" class="link-4" href="https://$2">$1</a>'
    );

    // Tratamento adicional para URLs com múltiplas barras invertidas escapadas
    texto = texto.replace(
      /\[([^\]]+)\]\((https?:\\\/\\\/[^\)]+)\)/g,
      function (match, text, url) {
        const cleanUrl = url.replace(/\\\/\\\//g, "//").replace(/\\\/$/g, "/");
        return `<a target="_blank" href="${cleanUrl}" class="link-4">${text}</a>`;
      }
    );

    // Tratamento adicional para URLs simples não em markdown ou href/src
    const regexUrlsSimples =
      /(?<!href=["'])(?<!src=["'])(https?:\/\/[^\s"'<]+)/g;

    texto = texto.replace(regexUrlsSimples, (match) => {
      return `<a target="_blank" class="link-4" href="${match}">${match}</a>`;
    });

    // E-mails: garantir que aparecem como texto puro
    // (não faz nada, só garante que não vira link)

    // URLs: garantir que aparecem como texto puro
    // Remove <, > em volta de URLs (caso venham assim)
    texto = texto.replace(
      /<((https?:\/\/|www\.)[^>]+)>/g,
      '<a target="_blank" href="$1">$1</a>'
    );

    // Negrito **texto** (não pega dentro de palavras)
    texto = texto.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    // Itálico *texto* (não pega dentro de palavras ou entre dois asteriscos)
    texto = texto.replace(/(^|\s)\*([^*]+)\*(?=\s|$)/g, "$1<i>$2</i>");

    // Listas numeradas: mantém apenas o texto, sem <ol>/<ul>
    texto = texto.replace(/^(\d+)\.\s+/gm, "$1. ");
    // Listas com traço: mantém apenas o texto
    texto = texto.replace(/^[-*]\s+/gm, "- ");

    // Quebra de linha
    texto = texto.replace(/\n/g, "<br>");

    return this.sanitizer.bypassSecurityTrustHtml(texto);
  }

  /**
   * Converte strings com sequências escapadas (\\n, \\uXXXX, múltiplas barras) para texto legível
   */
  private decodeEscapedText(raw: any): string {
    if (raw == null) return "";
    let text = String(raw);
    // Remove aspas externas
    text = text.trim().replace(/^"|"$/g, "");

    // Primeiro, converte caracteres HTML escapados de volta para markdown
    text = text.replace(/&#91;/g, "[").replace(/&#93;/g, "]");
    text = text.replace(/\\\//g, "/").replace(/\\\\/g, "\\");

    // Normaliza múltiplas barras invertidas para uma barra válida em JSON
    // Ex.: \\\\uD83D \\n -> \uD83D \n
    try {
      // Tenta decodificar interpretando como string JSON
      const decoded = JSON.parse(`"${text.replace(/"/g, '\\"')}"`);
      // Converte unicode literal para emoji
      return this.emojiService.convertUnicodeToEmojis(decoded);
    } catch {
      // Fallback: substituições simples
      return this.emojiService
        .convertUnicodeToEmojis(text)
        .replace(/\\n/g, "\n")
        .replace(/\\t/g, "\t")
        .replace(/\\r/g, "\r");
    }
  }

  /**
   * Normaliza mensagem para que:
   * - BT: `olmRespostaIa` vire objeto com `.menu` e `.message` quando possível; caso contrário, vira texto em `htmlFormatado`
   * - US/AT/IA (texto): conteúdo vá para `htmlFormatado`
   * Também trata casos em que `olmRespostaIa` é array contendo o objeto.
   */
  private prepareMessageForRendering(msg: any): void {
    if (!msg) return;
    if (msg.olmTipo === "US") {
      msg.htmlFormatado = this.formatarTextoSimples(
        msg.olmMensagemCliente || ""
      );
      return;
    }

    // Se BT pode vir em vários formatos
    if (msg.olmTipo === "BT") {
      let content: any = msg.olmRespostaIa;

      // Se vier array, pega o primeiro item relevante
      if (Array.isArray(content) && content.length > 0) {
        content = content[0];
      }

      // Tenta primeiro parsear como JSON bruto (sem unescape), para não quebrar estruturas válidas
      if (typeof content === "string") {
        let parsedOk = false;
        try {
          const directParsed = JSON.parse(content);
          content = directParsed;
          parsedOk = true;
        } catch {}

        // Se falhou o parse direto, tenta decodificar escapes e parsear
        if (!parsedOk) {
          const decoded = this.decodeEscapedText(content);
          try {
            const parsed = JSON.parse(decoded);
            content = parsed;
            parsedOk = true;
          } catch {}

          // Se ainda não for JSON, renderiza como texto (com markdown/links)
          if (!parsedOk) {
            msg.htmlFormatado = this.formatarTextoSimples(decoded);
            msg.olmRespostaIa = decoded;
            return;
          }
        }
      }

      // Se for objeto com .menu ou buttonList, mantém como BT; se tiver só message, renderiza como texto
      if (content && typeof content === "object") {
        if (content.menu || content.buttonList) {
          msg.olmRespostaIa = content;
          msg.htmlFormatado = null;
          return;
        }
        if (content.message) {
          const textoMsg = this.decodeEscapedText(
            String(content.message || "")
          );
          msg.htmlFormatado = this.formatarTextoSimples(textoMsg);
          msg.olmRespostaIa = textoMsg;
          return;
        }
      }

      // Caso contrário, renderiza como texto
      const texto =
        typeof content === "object" && content !== null
          ? JSON.stringify(content)
          : String(content || "");
      msg.htmlFormatado = this.formatarTextoSimples(texto);
      msg.olmRespostaIa = texto;
      return;
    }

    // Demais tipos: IA/AT, etc. → texto
    const texto =
      typeof msg.olmRespostaIa === "object" && msg.olmRespostaIa !== null
        ? JSON.stringify(msg.olmRespostaIa)
        : this.decodeEscapedText(msg.olmRespostaIa || "");
    msg.htmlFormatado = this.formatarTextoSimples(texto);
  }

  /**
   * Verifica se a última mensagem da conversa é do tipo US (usuário) e se não há atendimento humano ativo.
   * Usado para controlar a exibição do input.
   * @param conversaSala Array de mensagens da conversa.
   */
  existeUS(conversaSala: any[]): boolean {
    // console.log(conversaSala[conversaSala.length - 1].olmTipo);
    if (!conversaSala.length) return false;
    if (this.atendimentoHumanoAtivo) return false;
    return conversaSala[conversaSala.length - 1].olmTipo === "US";
  }

  /**
   * Envia uma opção selecionada de botão (label).
   * @param msgContexto A mensagem original que continha o botão.
   * @param botao O botão selecionado.
   */
  selecaoBotao(msgContexto: any, botao: any): void {
    this.hasUserInteracted = true; // Marca que o usuário interagiu
    const texto = botao.label || "";
    if (!texto) return;

    const extras = {
      buttonId: botao.id,
      reference: msgContexto.olmId,
    };

    const { displayMessage, socketPayload } = this.criarPayloadMensagem(
      texto,
      extras
    );

    this.conversaSala.push(displayMessage);
    this.disablePreviousBTButtons();
    this.roleConversaParaFinal();

    this.enviarMensagemAoSocket(socketPayload);
  }

  /**
   * Envia uma opção selecionada de item de lista (title).
   * @param msgContexto A mensagem original que continha o item.
   * @param botao O item selecionado.
   */
  selecaoItem(msgContexto: any, botao: any): void {
    this.hasUserInteracted = true; // Marca que o usuário interagiu
    const texto = botao.title || "";
    if (!texto) return;

    const extras = {
      buttonId: botao.id,
      reference: msgContexto.olmId,
    };

    const { displayMessage, socketPayload } = this.criarPayloadMensagem(
      texto,
      extras
    );

    this.conversaSala.push(displayMessage);
    this.disablePreviousBTButtons();
    this.roleConversaParaFinal();

    this.enviarMensagemAoSocket(socketPayload);
  }

  /**
   * Envia uma opção selecionada de link reply (label).
   * @param msgContexto A mensagem original que continha o link.
   * @param botao O link selecionado.
   */
  selecaoLinkReply(msgContexto: any, botao: any): void {
    this.hasUserInteracted = true; // Marca que o usuário interagiu
    const texto = botao.label || "";
    if (!texto) return;

    const extras = {
      buttonId: botao.id,
      reference: msgContexto.olmId,
    };

    const { displayMessage, socketPayload } = this.criarPayloadMensagem(
      texto,
      extras
    );

    this.conversaSala.push(displayMessage);
    this.disablePreviousBTButtons();
    this.roleConversaParaFinal();

    this.enviarMensagemAoSocket(socketPayload);
  }

  onChatWindowMouseMove(event: MouseEvent) {
    const chatWindow = this.scrollRef?.nativeElement;
    if (chatWindow) {
      const rect = chatWindow.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const elementWidth = rect.width;
      const distanceFromRight = elementWidth - mouseX;

      // Só mexe com classe do DOM, não altera variáveis observadas pelo Angular!
      chatWindow.classList.add("show-scrollbar");
      if (distanceFromRight < 12) {
        chatWindow.classList.add("wide-scrollbar");
      } else {
        chatWindow.classList.remove("wide-scrollbar");
      }
    }
  }
  onChatWindowMouseLeave() {
    const chatWindow = this.scrollRef?.nativeElement;
    if (chatWindow) {
      chatWindow.classList.remove("show-scrollbar");
      chatWindow.classList.remove("wide-scrollbar");
    }
  }

  /**
   * Fecha o iframe ou a janela do chat.
   */
  closeChat(): void {
    window.parent.postMessage({ action: "closeChat" }, "*");
  }

  // ========================================
  // MÉTODOS PÚBLICOS - Upload de Arquivos
  // ========================================

  toggleUploadMenu(): void {
    this.showUploadMenu = !this.showUploadMenu;
  }

  selecionarImagem(): void {
    this.showUploadMenu = false;
    this.openUploadModal("IMG");
  }

  selecionarDocumento(): void {
    this.showUploadMenu = false;
    this.openUploadModal("DOC");
  }

  selecionarVideo(): void {
    this.showUploadMenu = false;
    this.openUploadModal("VID");
  }

  onImagemSelecionada(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0] || null;
    if (!file) return;
    const error = this.validateFile(file, this.ALLOWED_IMAGE_MIME_TYPES);
    if (error) {
      this.notificacaoService.notificar("Arquivo inválido", error);
      (event.target as HTMLInputElement).value = "";
      return;
    }
    (event.target as HTMLInputElement).value = "";
    this.uploadFileWithSolicLink(file, "IMG");
  }

  onDocumentoSelecionado(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0] || null;
    if (!file) return;
    const error = this.validateFile(file, this.ALLOWED_DOCUMENT_MIME_TYPES);
    if (error) {
      this.notificacaoService.notificar("Arquivo inválido", error);
      (event.target as HTMLInputElement).value = "";
      return;
    }
    (event.target as HTMLInputElement).value = "";
    this.uploadFileWithSolicLink(file, "DOC");
  }

  onVideoSelecionado(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0] || null;
    if (!file) return;
    const error = this.validateFile(file, this.ALLOWED_VIDEO_MIME_TYPES);
    if (error) {
      this.notificacaoService.notificar("Arquivo inválido", error);
      (event.target as HTMLInputElement).value = "";
      return;
    }
    (event.target as HTMLInputElement).value = "";
    this.uploadFileWithSolicLink(file, "VID");
  }

  openUploadModal(tipo: "IMG" | "DOC" | "VID"): void {
    this.uploadModalType = tipo;
    this.uploadModalOpen = true;
    this.uploadModalDragOver = false;
    this.stepStatusSolic = "idle";
    this.stepStatusUpload = "idle";
    this.stepStatusSend = "idle";
    if (this.selectedUploadPreviewUrl) {
      this.revokePreviewUrl();
    }
    this.selectedUploadFile = null;
    this.selectedUploadPreviewUrl = "";
    this.selectedUploadPreviewSafeUrl = null;
  }

  closeUploadModal(): void {
    this.uploadModalOpen = false;
    this.uploadModalType = null;
    this.uploadModalDragOver = false;
    this.stepStatusSolic = "idle";
    this.stepStatusUpload = "idle";
    this.stepStatusSend = "idle";
    if (this.selectedUploadPreviewUrl) {
      this.revokePreviewUrl();
    }
    this.selectedUploadFile = null;
    this.selectedUploadPreviewUrl = "";
    this.selectedUploadPreviewSafeUrl = null;
  }

  onUploadModalBodyClick(event: MouseEvent): void {
    event.stopPropagation();
  }

  onDragOverUpload(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.uploadModalDragOver = true;
  }

  onDragLeaveUpload(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.uploadModalDragOver = false;
  }

  onDropUpload(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.uploadModalDragOver = false;
    const file = event.dataTransfer?.files?.[0];
    if (file) {
      const allowed =
        this.uploadModalType === "IMG"
          ? this.ALLOWED_IMAGE_MIME_TYPES
          : this.uploadModalType === "DOC"
          ? this.ALLOWED_DOCUMENT_MIME_TYPES
          : this.ALLOWED_VIDEO_MIME_TYPES;
      const error = this.validateFile(file, allowed);
      if (error) {
        this.notificacaoService.notificar("Arquivo inválido", error);
        return;
      }
      this.setSelectedUploadFile(file);
    }
  }

  onUploadFileInputChange(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0] || null;
    if (!file) return;
    const allowed =
      this.uploadModalType === "IMG"
        ? this.ALLOWED_IMAGE_MIME_TYPES
        : this.uploadModalType === "DOC"
        ? this.ALLOWED_DOCUMENT_MIME_TYPES
        : this.ALLOWED_VIDEO_MIME_TYPES;
    const error = this.validateFile(file, allowed);
    if (error) {
      this.notificacaoService.notificar("Arquivo inválido", error);
      (event.target as HTMLInputElement).value = "";
      return;
    }
    (event.target as HTMLInputElement).value = "";
    this.setSelectedUploadFile(file);
  }

  getAcceptForCurrentType(): string {
    switch (this.uploadModalType) {
      case "IMG":
        return "image/*";
      case "DOC":
        return ".pdf,.doc,.docx,.txt,.xls,.xlsx,.csv";
      case "VID":
        return "video/*";
      default:
        return "*/*";
    }
  }

  private setSelectedUploadFile(file: File): void {
    this.selectedUploadFile = file;
    if (this.selectedUploadPreviewUrl) {
      this.revokePreviewUrl();
    }
    if (this.uploadModalType === "IMG" || this.uploadModalType === "VID") {
      const url = window.URL.createObjectURL(file);
      this.selectedUploadPreviewUrl = url;
      this.selectedUploadPreviewSafeUrl =
        this.sanitizer.bypassSecurityTrustUrl(url);
    } else {
      this.selectedUploadPreviewUrl = "";
      this.selectedUploadPreviewSafeUrl = null;
    }
  }

  private revokePreviewUrl(): void {
    try {
      window.URL.revokeObjectURL(this.selectedUploadPreviewUrl);
    } catch {}
    this.selectedUploadPreviewSafeUrl = null;
  }

  async confirmUploadFromModal(): Promise<void> {
    this.hasUserInteracted = true; // Marca interação via upload
    if (!this.uploadModalType || !this.selectedUploadFile) return;
    const protocoloArquivos = this.salaPrincipal?.ombProtocolo;
    if (!protocoloArquivos) {
      this.notificacaoService.notificar(
        "Aguarde",
        "A sala ainda está carregando."
      );
      return;
    }
    const file = this.selectedUploadFile;
    const tipoMsg = this.uploadModalType;
    const uuid = (window as any).crypto?.randomUUID
      ? (window as any).crypto.randomUUID()
      : uuidv4();
    const ext = file.name.split(".").pop();
    const fileName = `${uuid}.${ext}`;
    this.stepStatusSolic = "loading";
    this.stepStatusUpload = "idle";
    this.stepStatusSend = "idle";
    try {
      const resp: any = await firstValueFrom(
        this.atendimentoHumanizadoService.SolicLinkArquivo(
          String(protocoloArquivos),
          fileName,
          file.type
        )
      );
      const presignedUrl: string = resp?.url || resp;
      if (!presignedUrl) throw new Error("URL de upload não recebida");

      this.stepStatusSolic = "success";
      this.stepStatusUpload = "loading";
      const uploadResp = await fetch(presignedUrl, {
        method: "PUT",
        body: file,
        headers: { "Content-Type": file.type },
      });
      if (!uploadResp.ok) {
        throw new Error("Falha no upload");
      }

      this.stepStatusUpload = "success";
      this.stepStatusSend = "loading";
      await this.enviarMensagemArquivo(tipoMsg, file.type, fileName);
      this.stepStatusSend = "success";
      this.notificacaoService.notificar(
        "Arquivo enviado",
        this.getFileName(fileName)
      );
      // this.closeUploadModal();
    } catch (e) {
      if (this.stepStatusSolic === "loading") {
        this.stepStatusSolic = "error";
      } else if (this.stepStatusUpload === "loading") {
        this.stepStatusUpload = "error";
      } else if (this.stepStatusSend === "loading") {
        this.stepStatusSend = "error";
      }
      this.notificacaoService.notificar(
        "Erro",
        "Não foi possível enviar o arquivo."
      );
    }
  }

  private validateFile(file: File, allowedMimeTypes: string[]): string | null {
    if (!allowedMimeTypes.includes(file.type)) {
      return "Tipo de arquivo não permitido.";
    }
    if (file.size > this.MAX_UPLOAD_BYTES) {
      return "O arquivo excede o limite de 100MB.";
    }
    return null;
  }

  private updateWaitingForResponse(): void {
    this.isWaitingForResponse = this.existeUS(this.conversaSala);
  }

  private async uploadFileWithSolicLink(
    file: File,
    tipoMsg: "IMG" | "DOC" | "VID"
  ): Promise<void> {
    try {
      const uuid = (window as any).crypto?.randomUUID
        ? (window as any).crypto.randomUUID()
        : uuidv4();
      const ext = file.name.split(".").pop();
      const fileName = `${uuid}.${ext}`;
      const protocoloArquivos =
        this.salaPrincipal?.ombProtocolo || this.protocolo || "";

      const resp: any = await firstValueFrom(
        this.atendimentoHumanizadoService.SolicLinkArquivo(
          String(protocoloArquivos),
          fileName,
          file.type
        )
      );
      const presignedUrl: string = resp?.url || resp;
      if (!presignedUrl) throw new Error("URL de upload não recebida");

      const uploadResp = await fetch(presignedUrl, {
        method: "PUT",
        body: file,
        headers: { "Content-Type": file.type },
      });
      if (!uploadResp.ok) {
        throw new Error("Falha no upload");
      }

      await this.enviarMensagemArquivo(tipoMsg, file.type, fileName);
      this.notificacaoService.notificar(
        "Arquivo enviado",
        this.getFileName(fileName)
      );
    } catch (e) {
      this.notificacaoService.notificar(
        "Erro",
        "Não foi possível enviar o arquivo."
      );
    }
  }

  private async enviarMensagemArquivo(
    tipoMsg: "IMG" | "DOC" | "VID",
    mimeType: string,
    fileKey: string
  ): Promise<void> {
    const dataHora = this.formatarDataIsoParaBR(new Date().toISOString());
    const id = uuidv4();
    const afiCodigo = "DETAL001";

    const displayMessage: any = {
      olmId: id,
      olmStatus: "P",
      olmDataHoraEnvio: dataHora,
      olmDatahoraRegistro: dataHora,
      olmProtocoloConversa: this.protocolo,
      afiCodigo,
      olmMensagemCliente: fileKey,
      olmRespostaIa: "",
      olmTipo: "US",
      usuId: this.userId,
      para: this.salaPrincipal?.usuId,
      olmTipoMsg: tipoMsg,
      olmMimeType: mimeType,
    };
    this.conversaSala.push(displayMessage);
    this.roleConversaParaFinal();

    const socketPayload: any = {
      id,
      protocolo: this.protocolo,
      tipo: "US",
      de: this.userId || "",
      para: this.salaPrincipal?.usuId,
      texto: fileKey,
      dataHora,
      afiCodigo,
      tipoMsg,
      mimeType,
    };
    this.enviarMensagemAoSocket(socketPayload);
  }

  getFileName(fileKey: string): string {
    if (!fileKey) return "Arquivo";
    const parts = String(fileKey).split("/");
    const name = parts[parts.length - 1];
    return name || String(fileKey);
  }

  async visualizarArquivo(msg: any): Promise<void> {
    try {
      const fileKey = msg?.olmMensagemCliente || msg?.olmRespostaIa;
      if (!fileKey) return;
      const protocoloArquivos =
        this.salaPrincipal?.ombProtocolo || this.protocolo || "";
      const resp: any = await firstValueFrom(
        this.atendimentoHumanizadoService.RetornaUrlArquivo(
          String(protocoloArquivos),
          String(fileKey)
        )
      );
      const url: string = resp?.url || resp;
      if (url) window.open(url, "_blank");
    } catch (e) {
      this.notificacaoService.notificar(
        "Erro",
        "Não foi possível carregar o arquivo para visualização."
      );
    }
  }

  async baixarArquivo(msg: any): Promise<void> {
    const fileKey = msg?.olmMensagemCliente || msg?.olmRespostaIa;
    if (!fileKey) return;
    try {
      this.downloadingFiles[fileKey] = true;
      const protocoloArquivos =
        this.salaPrincipal?.ombProtocolo || this.protocolo || "";
      const resp: any = await firstValueFrom(
        this.atendimentoHumanizadoService.RetornaUrlArquivo(
          String(protocoloArquivos),
          String(fileKey)
        )
      );
      const url: string = resp?.url || resp;
      const r = await fetch(url);
      if (!r.ok) throw new Error("Erro ao baixar arquivo");
      const blob = await r.blob();
      const objectUrl = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = objectUrl;
      a.download = this.getFileName(fileKey);
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(objectUrl);
    } catch (e) {
      this.notificacaoService.notificar(
        "Erro",
        "Não foi possível baixar o arquivo."
      );
    } finally {
      this.downloadingFiles[fileKey] = false;
    }
  }

  onImageFilePicked(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files && input.files.length > 0 ? input.files[0] : null;
    if (!file) {
      this.selectedUploadFile = null;
      this.uploadStepConfirm = false;
      return;
    }
    this.handlePickedFile(file, this.ALLOWED_IMAGE_MIME_TYPES);
  }
  onDocumentFilePicked(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files && input.files.length > 0 ? input.files[0] : null;
    if (!file) {
      this.selectedUploadFile = null;
      this.uploadStepConfirm = false;
      return;
    }
    this.handlePickedFile(file, this.ALLOWED_DOCUMENT_MIME_TYPES);
  }
  onVideoFilePicked(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files && input.files.length > 0 ? input.files[0] : null;
    if (!file) {
      this.selectedUploadFile = null;
      this.uploadStepConfirm = false;
      return;
    }
    this.handlePickedFile(file, this.ALLOWED_VIDEO_MIME_TYPES);
  }
  resetUploadModal() {
    this.uploadStepConfirm = false;
    this.selectedUploadFile = null;
    // Limpa todos os inputs de file
    setTimeout(() => {
      const fileInputs = document.querySelectorAll(
        '.modal-upload input[type="file"]'
      );
      fileInputs.forEach((input: any) => (input.value = ""));
    }, 100);
  }
  async confirmAndUploadImage(modalRef: any) {
    this.hasUserInteracted = true; // Marca interação via upload
    if (!this.selectedUploadFile || this.uploadInProgress) return;
    const validationError = this.validateFile(
      this.selectedUploadFile,
      this.ALLOWED_IMAGE_MIME_TYPES
    );
    if (validationError) {
      Swal.fire({
        icon: "warning",
        title: "Arquivo inválido",
        text: validationError,
      });
      return;
    }
    this.uploadInProgress = true;
    try {
      await this.uploadFileWithSolicLink(this.selectedUploadFile, "IMG");
      this.resetUploadModal();
      modalRef.close();
      Swal.fire({
        icon: "success",
        title: "Arquivo enviado!",
        text: "Seu arquivo foi enviado com sucesso.",
        timer: 2000,
        showConfirmButton: false,
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Erro ao enviar",
        text: "Não foi possível enviar a imagem.",
        timer: 2500,
        showConfirmButton: false,
      });
    } finally {
      this.uploadInProgress = false;
    }
  }
  async confirmAndUploadDocument(modalRef: any) {
    this.hasUserInteracted = true; // Marca interação via upload
    if (!this.selectedUploadFile || this.uploadInProgress) return;
    const validationError = this.validateFile(
      this.selectedUploadFile,
      this.ALLOWED_DOCUMENT_MIME_TYPES
    );
    if (validationError) {
      Swal.fire({
        icon: "warning",
        title: "Arquivo inválido",
        text: validationError,
      });
      return;
    }
    this.uploadInProgress = true;
    try {
      await this.uploadFileWithSolicLink(this.selectedUploadFile, "DOC");
      this.resetUploadModal();
      modalRef.close();
      Swal.fire({
        icon: "success",
        title: "Arquivo enviado!",
        text: "Seu arquivo foi enviado com sucesso.",
        timer: 2000,
        showConfirmButton: false,
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Erro ao enviar",
        text: "Não foi possível enviar o documento.",
        timer: 2500,
        showConfirmButton: false,
      });
    } finally {
      this.uploadInProgress = false;
    }
  }
  async confirmAndUploadVideo(modalRef: any) {
    this.hasUserInteracted = true; // Marca interação via upload
    if (!this.selectedUploadFile || this.uploadInProgress) return;
    const validationError = this.validateFile(
      this.selectedUploadFile,
      this.ALLOWED_VIDEO_MIME_TYPES
    );
    if (validationError) {
      Swal.fire({
        icon: "warning",
        title: "Arquivo inválido",
        text: validationError,
      });
      return;
    }
    this.uploadInProgress = true;
    try {
      await this.uploadFileWithSolicLink(this.selectedUploadFile, "VID");
      this.resetUploadModal();
      modalRef.close();
      Swal.fire({
        icon: "success",
        title: "Arquivo enviado!",
        text: "Seu arquivo foi enviado com sucesso.",
        timer: 2000,
        showConfirmButton: false,
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Erro ao enviar",
        text: "Não foi possível enviar o vídeo.",
        timer: 2500,
        showConfirmButton: false,
      });
    } finally {
      this.uploadInProgress = false;
    }
  }
  private handlePickedFile(file: File, allowedMimeTypes: string[]): boolean {
    const error = this.validateFile(file, allowedMimeTypes);
    if (error) {
      Swal.fire({
        icon: "warning",
        title: "Arquivo inválido",
        text: error,
      });
      this.selectedUploadFile = null;
      this.uploadStepConfirm = false;
      return false;
    }
    this.selectedUploadFile = file;
    this.uploadStepConfirm = true;
    return true;
  }
  fecharViewer() {
    this.viewerOpen = false;
    this.viewerType = null;
    this.viewerUrl = "";
    this.viewerTitle = "";
  }
  onViewerBodyClick(event: MouseEvent) {
    event.stopPropagation();
  }
  async baixarMensagem(msg: any) {
    const fileKey = msg.olmMensagemCliente || msg.olmRespostaIa;
    const tipoMsg = msg.olmTipoMsg;
    if (!fileKey) return;
    try {
      Swal.fire({
        title: "Baixando arquivo...",
        allowOutsideClick: false,
        didOpen: (popup) => {
          const confirmBtn = popup.querySelector(
            ".swal2-confirm"
          ) as HTMLButtonElement | null;
          if (confirmBtn) {
            Swal.showLoading(confirmBtn);
          } else {
            (Swal as any).showLoading();
          }
        },
      });
      this.downloadingFiles[fileKey] = true;
      const protocolo = this.salaPrincipal.ombProtocolo;
      const url = await this.getValidFileUrl(fileKey, protocolo);
      const fetchResponse = await fetch(url);
      if (!fetchResponse.ok) throw new Error("Erro ao baixar arquivo");
      const blob = await fetchResponse.blob();
      const objectUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = objectUrl;
      link.download = this.getFileName(fileKey);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(objectUrl);
      Swal.close();
      this.notificacaoService.notificar(
        "Download concluído",
        `Arquivo ${this.getFileName(fileKey)} baixado com sucesso!`
      );
    } catch (e) {
      Swal.close();
      Swal.fire({
        icon: "error",
        title: "Erro no download",
        text: "Não foi possível baixar o arquivo. Tente novamente.",
        timer: 2500,
        showConfirmButton: false,
      });
      this.notificacaoService.notificar(
        "Erro no download",
        "Não foi possível baixar o arquivo. Tente novamente."
      );
    } finally {
      if (fileKey) this.downloadingFiles[fileKey] = false;
    }
  }

  private extractExpiresFromUrl(url: string): number | null {
    const match = url.match(/[?&]Expires=(\d+)/);
    return match ? parseInt(match[1], 10) : null;
  }

  private isUrlExpired(expires: number): boolean {
    const now = Math.floor(Date.now() / 1000);
    return expires <= now;
  }

  private async getValidFileUrl(
    fileKey: string,
    protocolo: string
  ): Promise<string> {
    const cached = this.fileUrlCache[fileKey];
    if (cached && !this.isUrlExpired(cached.expires)) {
      return cached.url;
    }
    const response: any = await this.atendimentoHumanizadoService
      .RetornaUrlArquivo(protocolo, fileKey)
      .toPromise();
    const url: string = response?.url || response;
    const expires =
      this.extractExpiresFromUrl(url) ?? Math.floor(Date.now() / 1000) + 60;
    this.fileUrlCache[fileKey] = { url, expires };
    return url;
  }
}
