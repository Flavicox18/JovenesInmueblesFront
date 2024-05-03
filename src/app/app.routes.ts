import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'index',
    title: 'Index',
    loadComponent: () => import('./pages/index/index.component'),
          
  },
  { 
    path: 'login',
    title: 'Login',
    loadComponent: () => import('./auth/login/login.component'),
  },
  { 
    path: 'register',
    title: 'Register',
    loadComponent: () => import('./auth/register/register.component'),
  },

  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  }
];
