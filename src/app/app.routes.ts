import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./feature/login/login/login.component').then(
        (m) => m.LoginComponent
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./feature/login/login/login.component').then(
        (m) => m.LoginComponent
      ),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./feature/dashboard/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
