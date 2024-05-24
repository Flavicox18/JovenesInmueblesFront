import { Routes } from '@angular/router';
import {IndexComponent} from "./pages/index/index.component";
import {RegisterComponent} from "./auth/register/register.component";
import {IniciarSesionClienteComponent} from "./auth/iniciar-sesion-cliente/iniciar-sesion-cliente.component";
import {IniciarSesionAgenteComponent} from "./auth/iniciar-sesion-agente/iniciar-sesion-agente.component";
import {IniciarSesionInmobiliariaComponent} from "./auth/iniciar-sesion-inmobiliaria/iniciar-sesion-inmobiliaria.component";
import {AgregarAgentesComponent} from "./pages/agentes/agregar-agentes/agregar-agentes.component";
import {EditarAgentesComponent} from "./pages/agentes/editar-agentes/editar-agentes.component";
import {GestionarAgentesComponent} from "./pages/agentes/gestionar-agentes/gestionar-agentes.component";
import {PerfilagenteComponent} from "./pages/perfilagente/perfilagente.component";
import {GestionarPropiedadesComponent} from "./pages/gestionarPropiedades/gestionarPropiedades.component";
import {AgregarPropiedadesComponent} from "./pages/agregarPropiedades/agregarPropiedades.component";
import {ModificarPropiedadesComponent} from "./pages/modificarPropiedades/modificarPropiedades.component";
import {AgregarGaleriaComponent} from "./pages/agregarGaleria/agregarGaleria.component";
import {PropiedadesComponent} from "./pages/propiedades/propiedades.component";

export const routes: Routes = [

  {
    path: 'index',
    title: 'Index',
    component: IndexComponent,
  },

  {
    path: 'register',
    title: 'Register',
    component: RegisterComponent,
  },
  {
    path: 'IniciarSesionCliente',
    title: 'Iniciar Sesion Cliente',
    component: IniciarSesionClienteComponent
  },
  {
    path: 'IniciarSesionAgente',
    title: 'Iniciar Sesion Agente',
    component: IniciarSesionAgenteComponent
  },
  {
    path: 'IniciarSesionInmobiliaria',
    title: 'Iniciar Sesion Agente',
    component: IniciarSesionInmobiliariaComponent
  },
  {
    path: 'AgregarAgentes',
    title: 'Agregar Agentes',
    component: AgregarAgentesComponent
  },
  {
    path: 'EditarAgentes',
    title: 'Editar Agentes',
    component: EditarAgentesComponent
  },
  {
    path: 'GestionarAgentes',
    title: 'Gestionar Agentes',
    component: GestionarAgentesComponent
  },
  {
    path: 'perfilAgente',
    title: 'Perfil Agente',
    component: PerfilagenteComponent
  },

  {
    path: 'gestionarPropiedades',
    title: 'Gestionar Propiedades',
    component: GestionarPropiedadesComponent
  },

  {
    path: 'agregarPropiedades',
    title: 'Agregar Propiedades',
    component: AgregarPropiedadesComponent
  },

  {
    path: 'modificarPropiedades',
    title: 'Modificar Propiedades',
    component: ModificarPropiedadesComponent
  },
  {
    path: 'agregarGaleria',
    title: 'Modificar Propiedades Galería',
    component: AgregarGaleriaComponent
  },
  {
    path: 'propiedades',
    title: 'Propiedades',
    component: PropiedadesComponent
  },
  {
    path: 'AgregarAgentes',
    title: 'Agregar Agentes',
    component: AgregarAgentesComponent
  },
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  }
];
