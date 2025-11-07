import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { LisiComponent } from './lisi.component';
import { HttpClientModule } from '@angular/common/http';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const routes: Routes = [
  {
    path: '',
    component: LisiComponent
  }
]

@NgModule({
  declarations: [LisiComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    NgxStarRatingModule,
    HttpClientModule
  ],
  exports: [LisiComponent]
})
export class LisiModule { }
