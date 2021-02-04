import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterState } from '@angular/router';
import { AddComponent } from './components/users/add/add.component';
import { EditComponent } from './components/users/edit/edit.component';
import { ViewComponent } from './components/users/view/view.component';
import { HomeComponent } from './components/home/home.component';
import { MenuUsuariosComponent } from './components/menu-usuarios/menu-usuarios.component';



const routes: Routes = [
  { path: 'home', component:  HomeComponent},
  { path: 'add', component: AddComponent },
  { path: 'edit', component: EditComponent },
  { path: 'view', component: ViewComponent },
  { path: 'menuUsuarios', component: MenuUsuariosComponent },

];

export const APP_ROUTING = RouterModule.forRoot(routes);
