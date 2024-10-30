import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { EquiposComponent } from './pages/equipos/equipos.component';
import { TanquesComponent } from './pages/tanques/tanques.component';
import { ReportesComponent } from './pages/reportes/reportes.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { UbicacionesComponent } from './pages/ubicaciones/ubicaciones.component';
import { HeaderSinDrawerComponent } from './components/header-sin-drawer/header-sin-drawer.component';
import { ListadoEquiposComponent } from './components/listado-equipos/listado-equipos.component';


import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
import { MatSortModule } from '@angular/material/sort';
import { MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatCheckboxModule} from '@angular/material/checkbox';
import { ListadoTanquesComponent } from './components/listado-tanques/listado-tanques.component';
import { ListadoUsuariosComponent } from './components/listado-usuarios/listado-usuarios.component';
import { ListadoFincasComponent } from './components/listado-fincas/listado-fincas.component';
import { ModalGraficaComponent } from './components/modal-grafica/modal-grafica.component';
import { FormAddEquipoComponent } from './components/form-add-equipo/form-add-equipo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEquipoComponent } from './pages/add-equipo/add-equipo.component';

@NgModule({
  declarations: [
    EquiposComponent,
    TanquesComponent,
    ReportesComponent,
    UsuariosComponent,
    UbicacionesComponent,
    HeaderSinDrawerComponent,
    ListadoEquiposComponent,
    ListadoTanquesComponent,
    ListadoUsuariosComponent,
    ListadoFincasComponent,
    ModalGraficaComponent,
    FormAddEquipoComponent,
    AddEquipoComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatTabsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatInputModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatSelectModule,
    MatGridListModule,
    MatPaginatorModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatProgressBarModule,
    MatRippleModule,
    MatSortModule,
    MatRadioModule,
    MatDialogModule,
    NgApexchartsModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FormsModule
    
  ]
})
export class HomeModule { }
