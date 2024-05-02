import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'index',
    title: 'Index',
    loadComponent: () => import('./pages/index/index.component'),
  },

  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  }
];
