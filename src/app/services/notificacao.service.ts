import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NotificacaoService {
  solicitarPermissao() {
    if ('Notification' in window) {
      Notification.requestPermission();
    }
  }

  notificar(titulo: string, corpo: string) {
    if (Notification.permission === 'granted') {
      new Notification(titulo, {
        body: corpo,
        icon: 'favicon.ico'
      });
    }
  }
}
