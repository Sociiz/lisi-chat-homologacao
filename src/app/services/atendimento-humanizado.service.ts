import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ParametroInvalidoRequisicaoError } from '../errors/parametro-invalido-requisicao.error';
import { throwError, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RespostaBackendError } from '../errors/resposta-backend-error';

@Injectable({
  providedIn: 'root'
})
export class AtendimentoHumanizadoService {
  constructor(
    private http: HttpClient
  ) { }

  // SolicLinkArquivo
  SolicLinkArquivo(protocolo: string, arquivo: string, type: string): Observable<any> {
    if (!protocolo || String(protocolo).trim() === '') {
      return throwError(() => new ParametroInvalidoRequisicaoError("Parâmetro obrigatório ausente: x-Protocolo"));
    }
    if (!arquivo || String(arquivo).trim() === '') {
      return throwError(() => new ParametroInvalidoRequisicaoError("Parâmetro obrigatório ausente: x-Arquivo"));
    }
    if (!type || String(type).trim() === '') {
      return throwError(() => new ParametroInvalidoRequisicaoError("Parâmetro obrigatório ausente: x-Type"));
    }

    const headers = new HttpHeaders({
      'x-Protocolo': String(protocolo),
      'x-Arquivo': String(arquivo),
      'x-Type': String(type)
    });

    return this.http.get(environment.webapiurl + '/SolicLinkArquivo', { headers });
  }

  // RetornaUrlArquivo
  RetornaUrlArquivo(protocolo: string, arquivo: string): Observable<any> {
    if (!protocolo || String(protocolo).trim() === '') {
      return throwError(() => new ParametroInvalidoRequisicaoError("Parâmetro obrigatório ausente: x-Protocolo"));
    }
    if (!arquivo || String(arquivo).trim() === '') {
      return throwError(() => new ParametroInvalidoRequisicaoError("Parâmetro obrigatório ausente: x-Arquivo"));
    }

    const headers = new HttpHeaders({
      'x-Protocolo': String(protocolo),
      'x-Arquivo': String(arquivo)
    });

    return this.http.get(environment.webapiurl + '/RetornaUrlArquivo', { headers });
  }
}