import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquiposComponent } from './pages/equipos/equipos.component';
import { TanquesComponent } from './pages/tanques/tanques.component';
import { ReportesComponent } from './pages/reportes/reportes.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { UbicacionesComponent } from './pages/ubicaciones/ubicaciones.component';
import { AddEquipoComponent } from './pages/add-equipo/add-equipo.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'equipo',
        component: EquiposComponent,
      },
      {
        path:'equipo/add',
        component: AddEquipoComponent
      },
      {
        path:'tanques',
        component: TanquesComponent
      },
      {
        path:'reportes',
        component: ReportesComponent
      },
      {
        path:'usuarios',
        component: UsuariosComponent
      },
      {
        path:'ubicaciones',
        component: UbicacionesComponent
      },
      {
        path:'**',
        redirectTo:'equipo'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
