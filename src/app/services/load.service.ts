import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadService {

  constructor(
    private loadingController: LoadingController
  ) { }

  async loading() {
    const loading = await this.loadingController.create({
      cssClass: 'loading-class',
      message: 'Só um momento ;)'
    });
    await loading.present();
  }

  dismiss() {
    this.loadingController.dismiss();
  }
}
