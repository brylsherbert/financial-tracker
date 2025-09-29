import { Component, inject, input } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon, AlertController } from "@ionic/angular/standalone";
import { ThemeService } from '../../services/theme.service';
import { addIcons } from 'ionicons';
import { personCircleOutline, sunny, sunnyOutline } from 'ionicons/icons';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Router } from '@angular/router';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [IonIcon, IonButton, IonButtons, IonToolbar, IonHeader, IonTitle],
})
export class HeaderComponent {
  private alertController = inject(AlertController);
  protected themeService = inject(ThemeService);
  private authService = inject(AuthService);
  private uiService = inject(UiService);
  private router = inject(Router);

  tabTitle = input<string>();
  showAuth = input<boolean>();

  constructor() { 
    addIcons({
      sunny,
      sunnyOutline,
      personCircleOutline
    })
  }

  // Show Alert If Auth Icon isPressed
  async showAuthAlert() {
    const alert = await this.alertController.create({
      header: "You're logged in",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Logout',
          role: 'destructive',
          handler: () => {
            this.handleLogout();
          }
        }
      ],
      mode: 'ios'
    });

    await alert.present();
  }

  // Logout logic
  async handleLogout() {
    const loading = await this.uiService.createLoading();
    loading.present();

    this.authService.logoutUser().subscribe({
      next: (response: any) => { 
        if(response) {
          this.router.navigateByUrl('/login', { replaceUrl: true });
          loading.dismiss()
        }
      },
      error: (err: any) => {
        console.warn('Error in logging out: ', err.message);
        loading.dismiss()
      }
    });
  }
}
