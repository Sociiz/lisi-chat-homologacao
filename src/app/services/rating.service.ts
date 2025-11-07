import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface RatingOptions {
  protocolMessage?: string;
  messageId?: string;
  customEndpoint?: string;
  customHeaders?: Record<string, string>;
}

export interface RatingState {
  isLiked: boolean;
  isDisliked: boolean;
  isDisabled: boolean;
}

export interface MessageRating {
  messageId: string;
  rating: 'L' | 'D' | null;
  timestamp: number;
}

@Injectable({
  providedIn: 'root'
})
export class RatingService {
  private readonly CONFIG = {
    maxRequests: 5,
    hardLimit: 10,
    timeLimitMs: 180000, // 3 minutos
    requestLimitWindow: 20000, // 20 segundos
    hardLimitWindow: 60000, // 60 segundos
    defaultEndpoint: 'https://sendlike.xpdstlsecurity.org/chat/make/tip',
    defaultKey: '3F785593-811C-4FB9-9FC2-EB40EFC99B1C'
  };

  private rateLimitReached = false;
  private hardLimitReached = false;
  private ratingTimestamps: number[] = [];
  private hardLimitTimestamps: number[] = [];
  private messageRatings: Map<string, MessageRating> = new Map();
  private protocolMessage: string | null = null;

  constructor(private http: HttpClient) {}

  // Função para criar ícone SVG de like
  createSvgLikeIcon(): SVGElement {
    const svg = this.createSvgElement('svg', {
      width: '24',
      height: '24',
      viewBox: '0 -960 960 960'
    });

    const path = this.createSvgElement('path', {
      fill: 'currentColor',
      d: 'M840-640q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14H280v-520l240-238q15-15 35.5-17.5T595-888q19 10 28 28t4 37l-45 183h258Zm-480 34v406h360l120-280v-80H480l54-220-174 174ZM160-120q-33 0-56.5-23.5T80-200v-360q0-33 23.5-56.5T160-640h120v80H160v360h120v80H160Zm200-80v-406 406Z'
    });

    svg.appendChild(path);
    return svg;
  }

  // Função para criar ícone SVG de dislike
  createSvgDislikeIcon(): SVGElement {
    const svg = this.createSvgElement('svg', {
      width: '24',
      height: '24',
      viewBox: '0 -960 960 960'
    });

    const path = this.createSvgElement('path', {
      fill: 'currentColor',
      d: 'M120-320q-32 0-56-24t-24-56v-80q0-7 2-15t4-15l120-282q9-20 30-34t44-14h440v520L440-82q-15 15-35.5 17.5T365-72q-19-10-28-28t-4-37l45-183H120Zm480-34v-406H240L120-480v80h360l-54 220 174-174Zm200-486q33 0 56.5 23.5T880-760v360q0 33-23.5 56.5T800-320H680v-80h120v-360H680v-80h120Zm-200 80v406-406Z'
    });

    svg.appendChild(path);
    return svg;
  }

  // Função auxiliar para criar elementos SVG
  private createSvgElement(tag: string, attributes: Record<string, string>): SVGElement {
    const element = document.createElementNS('http://www.w3.org/2000/svg', tag);
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
    return element;
  }

  // Função para criar botão de rating
  createRatingButton(type: 'like' | 'dislike'): HTMLButtonElement {
    const button = document.createElement('button');
    button.classList.add(`${type}-button`, 'rating-button');
    button.setAttribute('type', 'button');
    button.setAttribute('aria-label', type === 'like' ? 'Curtir' : 'Não curtir');
    
    const icon = type === 'like' ? this.createSvgLikeIcon() : this.createSvgDislikeIcon();
    button.appendChild(icon);
    
    return button;
  }

  // Função para aplicar estado aos botões
  applyButtonState(wrapper: HTMLElement, state: RatingState): void {
    const likeBtn = wrapper.querySelector('.like-button') as HTMLButtonElement;
    const dislikeBtn = wrapper.querySelector('.dislike-button') as HTMLButtonElement;
    
    if (likeBtn) {
      likeBtn.disabled = state.isDisabled;
      likeBtn.classList.toggle('active', state.isLiked);
    }
    
    if (dislikeBtn) {
      dislikeBtn.disabled = state.isDisabled;
      dislikeBtn.classList.toggle('active', state.isDisliked);
    }
    
    wrapper.classList.toggle('disabled', state.isDisabled);
  }

  // Função para adicionar botões de rating a um elemento
  addRatingButtons(element: HTMLElement, messageId: string, options?: RatingOptions): HTMLElement | null {
    try {
      if (!element || !(element instanceof HTMLElement)) {
        console.error('Elemento inválido fornecido para addRatingButtons');
        return null;
      }
      
      if (element.querySelector('.rating-btns')) {
        console.warn('Elemento já possui botões de rating');
        return null;
      }
      
      // Cria o wrapper dos botões
      const wrapper = document.createElement('div');
      wrapper.className = 'rating-btns';
      wrapper.dataset.messageId = messageId;
      wrapper.dataset.creationTime = Date.now().toString();
      
      // Cria os botões
      const likeBtn = this.createRatingButton('like');
      const dislikeBtn = this.createRatingButton('dislike');
      
      // Aplica estado inicial
      const currentRating = this.messageRatings.get(messageId);
      const initialState: RatingState = {
        isLiked: currentRating?.rating === 'L',
        isDisliked: currentRating?.rating === 'D',
        isDisabled: this.rateLimitReached || this.hardLimitReached
      };
      this.applyButtonState(wrapper, initialState);
      
      // Configura os event listeners
      let clickTimeout: ReturnType<typeof setTimeout> | null = null;
      
      const handleRatingClick = (type: 'L' | 'D', button: HTMLButtonElement, otherButton: HTMLButtonElement) => {
        if (clickTimeout) return;
        
        clickTimeout = setTimeout(() => {
          clickTimeout = null;
        }, 300);
        
        if (wrapper.classList.contains('disabled')) return;
        
        const currentState = button.classList.contains('active');
        
        // Atualiza estado visual
        const newState: RatingState = {
          isLiked: type === 'L' ? !currentState : false,
          isDisliked: type === 'D' ? !currentState : false,
          isDisabled: false
        };
        this.applyButtonState(wrapper, newState);
        
        // Salva o rating localmente
        const rating: MessageRating = {
          messageId,
          rating: newState.isLiked ? 'L' : newState.isDisliked ? 'D' : null,
          timestamp: Date.now()
        };
        this.messageRatings.set(messageId, rating);
        
                 // Envia avaliação
         this.sendRating(type, messageId, options).pipe(
           catchError((error: any) => {
             console.error('Erro ao enviar avaliação:', error);
             // Reverte estado em caso de erro
             this.applyButtonState(wrapper, {
               isLiked: type === 'L' ? currentState : false,
               isDisliked: type === 'D' ? currentState : false,
               isDisabled: false
             });
             this.messageRatings.delete(messageId);
             return throwError(error);
           })
         ).subscribe();
      };
      
      likeBtn.addEventListener('click', () => handleRatingClick('L', likeBtn, dislikeBtn));
      dislikeBtn.addEventListener('click', () => handleRatingClick('D', dislikeBtn, likeBtn));
      
      // Monta a estrutura
      wrapper.appendChild(likeBtn);
      wrapper.appendChild(dislikeBtn);
      
      // Insere no elemento
      element.appendChild(wrapper);
      
      return wrapper;
    } catch (error) {
      console.error('Erro ao adicionar botões de rating:', error);
      return null;
    }
  }

  // Função para remover botões de rating
  removeRatingButtons(element: HTMLElement): boolean {
    try {
      if (!element || !(element instanceof HTMLElement)) {
        console.error('Elemento inválido fornecido para removeRatingButtons');
        return false;
      }
      
      const existingButtons = element.querySelector('.rating-btns');
      if (existingButtons) {
        existingButtons.remove();
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('Erro ao remover botões de rating:', error);
      return false;
    }
  }

  // Função para definir o protocolo
  setProtocolMessage(protocol: string | null): void {
    this.protocolMessage = protocol;
  }

  // Função para resetar os limites
  resetLimits(): void {
    this.rateLimitReached = false;
    this.hardLimitReached = false;
    this.ratingTimestamps.length = 0;
    this.hardLimitTimestamps.length = 0;
    
    // Reabilita todos os botões
    document.querySelectorAll('.rating-btns').forEach(wrapper => {
      const state: RatingState = {
        isLiked: false,
        isDisliked: false,
        isDisabled: false
      };
      this.applyButtonState(wrapper as HTMLElement, state);
    });
  }

  // Função para obter estatísticas
  getRatingStats(): {
    messageRatings: number;
    rateLimitReached: boolean;
    hardLimitReached: boolean;
    ratingTimestamps: number;
    hardLimitTimestamps: number;
  } {
    return {
      messageRatings: this.messageRatings.size,
      rateLimitReached: this.rateLimitReached,
      hardLimitReached: this.hardLimitReached,
      ratingTimestamps: this.ratingTimestamps.length,
      hardLimitTimestamps: this.hardLimitTimestamps.length
    };
  }

  // Função para obter rating de uma mensagem
  getMessageRating(messageId: string): MessageRating | undefined {
    return this.messageRatings.get(messageId);
  }

  // Função para limpar timestamps antigos
  private cleanOldTimestamps(): void {
    const now = Date.now();
    while (this.ratingTimestamps.length && now - this.ratingTimestamps[0] > this.CONFIG.requestLimitWindow) {
      this.ratingTimestamps.shift();
    }
  }

  private cleanHardLimitTimestamps(): void {
    const now = Date.now();
    while (this.hardLimitTimestamps.length && now - this.hardLimitTimestamps[0] > this.CONFIG.hardLimitWindow) {
      this.hardLimitTimestamps.shift();
    }
  }

  // Função para desabilitar todos os botões
  private disableAllRatingButtons(): void {
    document.querySelectorAll('.rating-btns').forEach(wrapper => {
      const state: RatingState = {
        isLiked: false,
        isDisliked: false,
        isDisabled: true
      };
      this.applyButtonState(wrapper as HTMLElement, state);
    });
  }

  // Função para enviar avaliação
  public sendRating(type: string, messageId: string, options?: RatingOptions): Observable<any> {
    this.cleanOldTimestamps();
    this.cleanHardLimitTimestamps();
    
    if (this.hardLimitReached || this.hardLimitTimestamps.length >= this.CONFIG.hardLimit) {
      this.hardLimitReached = true;
      this.disableAllRatingButtons();
      return throwError(new Error('Limite rígido atingido'));
    }
    
    if (this.rateLimitReached || this.ratingTimestamps.length >= this.CONFIG.maxRequests) {
      this.rateLimitReached = true;
      this.disableAllRatingButtons();
      return throwError(new Error('Limite de taxa atingido'));
    }
    
    this.ratingTimestamps.push(Date.now());
    this.hardLimitTimestamps.push(Date.now());
    
    const endpoint = options?.customEndpoint || this.CONFIG.defaultEndpoint;
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-Key': this.CONFIG.defaultKey,
      'x-Tip': type,
      ...(options?.protocolMessage || this.protocolMessage ? { 'x-Prot': options?.protocolMessage || this.protocolMessage || '' } : {}),
      ...(messageId ? { 'x-Id': messageId } : {}),
      ...options?.customHeaders
    });
    
    return this.http.post(endpoint, {}, { headers });
  }
}
