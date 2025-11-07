import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ChatSocketService {

  constructor(
    private socket: Socket,
    private http: HttpClient,
  ) { }

  /**
   * Entra na fila de atendimento do chat.
   * Configura autenticação e reconecta o socket.
   * Retorna uma Promise que resolve quando o cliente estiver configurado.
   */
  clienteEntrarFila(protocolo: string, userId: string, clientKey: string): Promise<any> {
    return new Promise(resolve => {
      this.socket.ioSocket.auth = { userId, protocolo, tipo: 'US', canal: clientKey ?? 'C7VY7HCVF47H3F4' };

      if (this.socket.ioSocket.connected) {
        this.socket.disconnect();
      }

      const onConnect = () => {
        this.socket.ioSocket.off('connect', onConnect);
        this.socket.fromEvent('clienteConfigurado').pipe(take(1)).subscribe(res => {
          resolve(res);
        });
      };

      this.socket.ioSocket.on('connect', onConnect);
      this.socket.connect();
    });
  }

  /**
   * Conecta o socket com parâmetros de autenticação.
   */
  conectarSocket(userId: string, protocolo: string, tipo: string, canal: any) {
    this.socket.ioSocket.auth = { userId, protocolo, tipo };
    this.socket.connect();
  }

  /**
   * Envia uma mensagem via socket.
   * Retorna uma Promise que resolve com a resposta do servidor.
   */
  enviarMensagem(msg: {
    id: string,
    protocolo: any,
    tipo: string,
    de: string,
    para: string,
    texto: string,
    dataHora: any,
    afiCodigo: string
  }) {
    return new Promise((resolve, reject) => {
      this.socket.emit('mensagem', msg, (ack: { erros: boolean; mensagem: string; dados?: any }) => {
        if (ack.erros) {
          return reject(ack.mensagem);
        }
        resolve(ack.dados);
      });
    });
  }

  /**
   * Observável que emite sempre que há atualização na posição da fila.
   */
  onPosicaoFila(): Observable<any> {
    return this.socket.fromEvent('posicao-fila');
  }

  /**
   * Observável que emite quando o atendimento começa.
   */
  onInicioAtendimento(): Observable<any> {
    return this.socket.fromEvent('inicio-atendimento');
  }

  /**
   * Observável que emite quando o atendimento termina.
   */
  onFinalizaAtendimento(): Observable<any> {
    return this.socket.fromEvent('finaliza-atendimento');
  }

  /**
   * Observável que emite quando uma mensagem é recebida.
   */
  onMensagemRecebida(): Observable<any> {
    return this.socket.fromEvent('mensagemEnviada');
  }

  /**
   * Faz requisição GET para obter informações do chat.
   */
  GetInfoChat(token: string, hash: string): Observable<any> {
    const url = `${environment.webapiurl}/GetInfoChat`;
    const headers = { 'x-Token': token, 'x-Hash': hash };
    return this.http.get(url, { headers: new HttpHeaders(headers) });
  }

  /**
   * Faz requisição POST para gerar sessão de webchat.
   */
  PostGeraWebchatSession(clientKey: string): Observable<any> {
    const url = `${environment.webapiurl}/PostGeraWebchatSession`;
    const headers = { 'x-Canal': clientKey };
    return this.http.post(url, null, { headers: new HttpHeaders(headers) });
  }

  /**
   * Faz requisição POST para enviar avaliação de atendimento finalizado.
   */
  PostAvaliacaoAtdFinalizado(
    ombId: string,
    avaliacao: string,
    likeDeslike: any,
    protocolo: string
  ): Observable<any> {
    const url = `${environment.webapiurl}/PostAvaliacaoAtdFinalizado`;
    let params;
    const headers: any = {};

    if (ombId || ombId === 'undefined') {
      headers['x-OmbID'] = ombId;
    } else {
      headers['x-protocolo'] = protocolo;
    }

    if (avaliacao === '') {
      params = { 'x-DemandaAtd': likeDeslike };
    } else if (likeDeslike === '') {
      params = { 'x-Avaliacao': avaliacao };
    }

    return this.http.post(url, null, { headers, params });
  }

  /**
   * Emite evento personalizado via socket.
   */
  emitSocketTrigger(evento: string, socketPayload: any) {
    this.socket.emit(evento, socketPayload, (resposta: any) => {
      if (resposta?.erros) {
        console.error('Erro ao configurar atendente:', resposta.mensagem);
      }
    });
  }

  /**
   * Desconecta o socket.
   */
  disconnect() {
    this.socket.disconnect();
  }

  /**
   * Reconecta o socket usando protocolo salvo.
   * Útil para reconexão automática.
   */
  reconectarComProtocolo(protocolo: string, userId: string, clientKey: string): Promise<any> {
    return new Promise(resolve => {
      if (this.socket.ioSocket.connected) {
        this.socket.disconnect();
      }

      this.socket.ioSocket.auth = { userId, protocolo, tipo: 'US', canal: clientKey ?? 'C7VY7HCVF47H3F4' };

      const onConnect = () => {
        this.socket.ioSocket.off('connect', onConnect);
        this.socket.fromEvent('clienteConfigurado').pipe(take(1)).subscribe(res => {
          resolve(res);
        });
      };

      this.socket.ioSocket.on('connect', onConnect);
      this.socket.connect();
    });
  }

  /**
   * Retorna se o socket está conectado.
   */
  isConnected(): boolean {
    return this.socket.ioSocket.connected;
  }

  /**
   * Observável para evento de conexão do socket.
   */
  getConnectionStatus(): Observable<any> {
    return this.socket.fromEvent('connect');
  }

  /**
   * Observável para evento de desconexão do socket.
   */
  getDisconnectionStatus(): Observable<any> {
    return this.socket.fromEvent('disconnect');
  }

  /**
   * Observável para evento de cliente configurado.
   */
  onClienteConfigurado(): Observable<any> {
    return this.socket.fromEvent('clienteConfigurado');
  }
}
