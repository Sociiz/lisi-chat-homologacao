import { Component, OnInit } from '@angular/core';
import { NotificacaoService } from './services/notificacao.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nobleui-angular';

  ngOnInit(): void {}

  constructor(private notificacaoService: NotificacaoService){
    notificacaoService.solicitarPermissao();
  }
}
