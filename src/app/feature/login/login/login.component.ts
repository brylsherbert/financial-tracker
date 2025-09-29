import {
  Component,
  inject,
  OnInit,
} from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { User, UserResponse } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonNote,
  IonButton,
  IonIcon,
  IonInput,
  IonCol,
  IonRow,
  IonGrid,
  IonInputPasswordToggle,
  IonButtons,
  IonCard,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  arrowForwardOutline,
  eye,
  eyedropOutline,
  eyeOffOutline,
  eyeOffSharp,
  eyeOutline,
  eyeSharp,
  mail,
  mailOutline,
  sunny,
  sunnyOutline,
} from 'ionicons/icons';
import { ThemeService } from 'src/app/shared/services/theme.service';
import { Router } from '@angular/router';
import { UiService } from 'src/app/shared/services/ui.service';
import { HeaderComponent } from "src/app/shared/components/header/header.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [
    IonCard,
    IonGrid,
    IonCol,
    IonButton,
    IonContent,
    ReactiveFormsModule,
    IonInput,
    IonInputPasswordToggle,
    HeaderComponent,
    IonLabel
],
})
export class LoginComponent implements OnInit {
  // Inject Services
  private formBuilder = inject(NonNullableFormBuilder);
  protected themeService = inject(ThemeService);
  private authService = inject(AuthService);
  private uiService = inject(UiService);
  private router = inject(Router);

  // Create FormGroup and Validate
  readonly form = this.formBuilder.group({
    email: this.formBuilder.control('', {
      validators: [
        Validators.required,
        Validators.email,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
      ],
    }),
    password: this.formBuilder.control('', {
      validators: [Validators.required, Validators.minLength(6)],
    }),
  });

  // Get FormControlName
  get email() {
    return this.form.controls.email;
  }
  get password() {
    return this.form.controls.password;
  }

  constructor() {
    // Add Icons
    addIcons({
      arrowForwardOutline,
      mailOutline,
      mail,
      eyeSharp,
      eyeOffSharp,
      sunnyOutline,
      sunny,
    });
  }

  ngOnInit() {
    // Initialize Theme Service
    this.themeService.initThemeService();
  }

  // Submit Button
  async submitForm() {
    const loading = await this.uiService.createLoading();
    loading.present();

    this.authService.loginUser(this.form.value as User).subscribe({
      next: async (response: UserResponse) => {
        if (response) {
          (await this.uiService.createToast(`Welcome! We're so glad you're here. Let’s make this a great experience together!`, 2000, 'success')).present();
          this.router.navigateByUrl('/dashboard', { replaceUrl: true });
        }

        loading.dismiss();
      },
      error: async (err: any) => {
        (await this.uiService.createToast(`Incorrect email/password`, 2000, 'danger')).present();
        console.error('Error logging in: ', err.message);
        loading.dismiss();
      },
    });
  }
}
