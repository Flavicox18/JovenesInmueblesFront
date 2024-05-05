import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'index',
    title: 'Index',
    loadComponent: () => import('./pages/index/index.component'),

  },
  {
    path: 'registrarse',
    title: 'Registrarse',
    loadComponent: () => import('./auth/register/register.component'),
  },
  {
    path: 'IniciarSesionCliente',
    title: 'Iniciar Sesion Cliente',
    loadComponent: ()=> import('./auth/iniciar-sesion-cliente/iniciar-sesion-cliente.component')
  },
  {
    path: 'IniciarSesionAgente',
    title: 'Iniciar Sesion Agente',
    loadComponent: ()=> import('./auth/iniciar-sesion-agente/iniciar-sesion-agente.component')
  },
  {
    path: 'IniciarSesionInmobiliaria',
    title: 'Iniciar Sesion Agente',
    loadComponent: ()=> import('./auth/iniciar-sesion-inmobiliaria/iniciar-sesion-inmobiliaria.component')
  },
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  }
];
