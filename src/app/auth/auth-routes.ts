import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./auth').then((m) => m.Auth),
    children: [
      {
        path: 'signin',
        loadComponent: () => import('./signin/signin').then((m) => m.Signin),
      },
      {
        path: 'signup',
        loadComponent: () => import('./signup/signup').then((m) => m.Signup),
      },
      {
        path: 'forgot-password',
        loadComponent: () =>
          import('./forgot-password/forgot-password').then(
            (m) => m.ForgotPassword
          ),
      },
    ],
  },
];
