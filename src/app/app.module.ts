import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE, APP_INITIALIZER } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { ErrorPageComponent } from './views/pages/error-page/error-page.component';
// import { ErrorTokenComponent } from './views/pages/error-token/error-token.component';



import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

import { DatePipe, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings } from 'ng-recaptcha';
import { IonicModule } from '@ionic/angular';
import { NgxMaskModule } from 'ngx-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { BolepixComponent } from './views/pages/bolepix/bolepix.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';

const config: SocketIoConfig = {
  url: environment.socketwebapiurl,
  options: {
    withCredentials: true,
    transports: ['websocket', 'polling'],
    autoConnect: false
  }
};

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    // ChatComponent,
    // ErrorTokenComponent,
    // BolepixComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    NgxMaskModule.forRoot(),
    BrowserAnimationsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    FormsModule,
    SweetAlert2Module.forRoot(),
    ReactiveFormsModule,
    SocketIoModule.forRoot(config),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    })
  ],
  providers: [
    DatePipe,
    {
      provide: HIGHLIGHT_OPTIONS, // https://www.npmjs.com/package/ngx-highlightjs
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          xml: () => import('highlight.js/lib/languages/xml'),
          typescript: () => import('highlight.js/lib/languages/typescript'),
          scss: () => import('highlight.js/lib/languages/scss'),
        }
      }
    },
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: '6LfnCP0mAAAAACWRC1O1jGvgbgZKl1lmnT-ulxfk',
      } as RecaptchaSettings,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
