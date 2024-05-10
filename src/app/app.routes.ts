import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'index',
    title: 'Index',
    loadComponent: () => import('./pages/index/index.component'),

  },

  {
    path: 'register',
    title: 'Register',
    loadComponent: () => import('./auth/register/register.component'),
  },

  {
    path: 'perfilAgente',
    title: 'Perfil Agente',
    loadComponent: () => import('./pages/perfilagente/perfilagente.component'),
  },

  {
    path: 'gestionarPropiedades',
    title: 'Gestionar Propiedades',
    loadComponent: () => import('./pages/gestionarPropiedades/gestionarPropiedades.component'),
  },

  {
    path: 'agregarPropiedades',
    title: 'Agregar Propiedades',
    loadComponent: () => import('./pages/agregarPropiedades/agregarPropiedades.component'),
  },

  {
    path: 'modificarPropiedades',
    title: 'Modificar Propiedades',
    loadComponent: () => import('./pages/modificarPropiedades/modificarPropiedades.component'),
  },


  {
    path: 'agregarGaleria',
    title: 'Modificar Propiedades Galería',
    loadComponent: () => import('./pages/agregarGaleria/agregarGaleria.component'),
  },

  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  }
];
