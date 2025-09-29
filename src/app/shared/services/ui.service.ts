import { inject, Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular/standalone';
import { LoadingController } from '@ionic/angular/standalone';

type Color =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light'
  | 'medium'
  | 'dark';

@Injectable({ providedIn: 'root'})
export class UiService {
  private toastController = inject(ToastController);
  private loadingController = inject(LoadingController);

  constructor() {}

  async createToast(message: string, duration: number, color: Color) {
    return await this.toastController.create({
      message: message,
      duration: duration,
      position: 'bottom',
      color: color,
      cssClass: '',
      buttons: [],
      animated: true,
      mode: 'ios',
      icon: '',
      htmlAttributes: {},
      keyboardClose: true,
      layout: 'baseline',
    });
  }

  async createLoading() {
  return await this.loadingController.create({
    spinner: 'bubbles',
    cssClass: '',
    duration: undefined,
    id: undefined,
    animated: true,
    backdropDismiss: false,
    keyboardClose: true,
    mode: 'ios',
    showBackdrop: true,
    translucent: true,
    enterAnimation: undefined,
    leaveAnimation: undefined,
  });
  }
}
