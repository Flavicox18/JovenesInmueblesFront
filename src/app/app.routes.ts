import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'index',
    title: 'Index',
    loadComponent: () => import('./pages/index/index.component'),

  },
  {
<<<<<<< Updated upstream
    path: 'registrarse',
    title: 'Registrarse',
=======
    path: 'login',
    title: 'Login',
    loadComponent: () => import('./auth/login/login.component'),
  },
  {
    path: 'register',
    title: 'Register',
>>>>>>> Stashed changes
    loadComponent: () => import('./auth/register/register.component'),
  },
  {
    path: 'IniciarSesionCliente',
    title: 'Iniciar Sesion Cliente',
    loadComponent: ()=> import('./auth/iniciar-sesion-cliente/iniciar-sesion-cliente.component'),
  },
  {
    path: 'IniciarSesionAgente',
    title: 'Iniciar Sesion Agente',
    loadComponent: ()=> import('./auth/iniciar-sesion-agente/iniciar-sesion-agente.component'),
  },
  {
    path: 'IniciarSesionInmobiliaria',
    title: 'Iniciar Sesion Agente',
    loadComponent: ()=> import('./auth/iniciar-sesion-inmobiliaria/iniciar-sesion-inmobiliaria.component'),
  },
  {
    path: 'AgregarAgentes',
    title: 'Agregar Agentes',
    loadComponent: ()=> import('./pages/agentes/agregar-agentes/agregar-agentes.component'),
  },
  {
    path: 'EditarAgentes',
    title: 'Editar Agentes',
    loadComponent: ()=> import('./pages/agentes/editar-agentes/editar-agentes.component'),
  },
  {
    path: 'GestionarAgentes',
    title: 'Gestionar Agentes',
    loadComponent: ()=> import('./pages/agentes/gestionar-agentes/gestionar-agentes.component'),
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
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  }
];
