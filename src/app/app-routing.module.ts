import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './views/pages/error-page/error-page.component';


const routes: Routes = [
  // { path:'auth', loadChildren: () => import('./views/pages/auth/auth.module').then(m => m.AuthModule) },
  {
    path: '',
    loadChildren: () => import('./views/pages/chat/chat.module').then(m => m.ChatModule)
  },
  {
    path: 'chat-c',
    loadChildren: () => import('./views/pages/chat/chat.module').then(m => m.ChatModule)
  },
  /*
  {
    path: 'autenticacao',
    loadChildren: () => import('./views/pages/autenticacao/autenticacao.module').then(m => m.AutenticacaoModule),
    canLoad: [AutoLoginGuard]
  },
  {
    path: '',
    component: BaseComponent,
    canLoad: [AuthGuard],
    children: [
      {
        path: 'general',
        loadChildren: () => import('./views/pages/general/general.module').then(m => m.GeneralModule),
        canLoad: [AuthGuard]
      },
      {
        path: 'controle-acesso',
        loadChildren: () => import('./views/pages/controle-acesso/controle-acesso.module').then(m => m.ControleAcessoModule),
        canLoad: [AuthGuard]
      },
    ]
  },
  */
  {
    path: 'error',
    component: ErrorPageComponent,
    data: {
      'type': 404,
      'title': 'Page Not Found',
      'desc': 'Oopps!! The page you were looking for doesn\'t exist.'
    }
  },
  {
    path: 'error/:type',
    component: ErrorPageComponent
  },
  { path: '**', redirectTo: 'error', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
