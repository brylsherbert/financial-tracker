import { Injectable, OnInit, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDarkModeSignal = signal<boolean>(false);

  public isDarkMode = this.isDarkModeSignal.asReadonly();

  initThemeService() {
    const savedTheme = localStorage.getItem('dark-mode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    this.isDarkModeSignal.set(
      savedTheme !== null ? JSON.parse(savedTheme) : prefersDark.matches
    );

    document.documentElement.classList.toggle(
      'ion-palette-dark',
      this.isDarkMode()
    );

    prefersDark.addEventListener('change', (mediaQuery) => {
      const useDark = mediaQuery.matches;
      const hasCustom = localStorage.getItem('dark-mode') !== null;
      if (!hasCustom) {
        document.documentElement.classList.toggle('ion-palette-dark', useDark);
      }
    });
  }

  setDarkMode(value: boolean) {
    localStorage.setItem('dark-mode', JSON.stringify(value));
    document.documentElement.classList.toggle('ion-palette-dark', value);
  }

  toggleDarkMode() {
    localStorage.setItem('dark-mode', JSON.stringify(!this.isDarkMode()));

    document.documentElement.classList.toggle(
      'ion-palette-dark',
      !this.isDarkMode()
    );

    this.isDarkModeSignal.set(!this.isDarkMode());
  }
}
