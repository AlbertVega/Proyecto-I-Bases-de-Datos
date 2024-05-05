import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperatorRegisterComponent } from './components/operator-register/operator-register.component';
import { OperatorLoginComponent } from './components/operator-login/operator-login.component';
import { OperatorViewComponent } from './components/operator-view/operator-view.component';
import { PrestamoActivoComponent } from './components/operator-view/prestamo-activo/prestamo-activo.component';
import { RegDevolucionComponent } from './components/operator-view/reg-devolucion/reg-devolucion.component';
import { ReservaLabComponent } from './components/operator-view/reserva-lab/reserva-lab.component';
import { ReportesComponent } from './components/operator-view/reportes/reportes.component';
import { ProfessorLoginComponent } from './components/professor-login/professor-login.component';
import { ProfessorViewComponent } from './components/professor-view/professor-view.component';
import { ReservarLabProfessorComponent } from './components/professor-view/reservar-lab-professor/reservar-lab-professor.component';
import { AprobarPrestamoComponent } from './components/professor-view/aprobar-prestamo/aprobar-prestamo.component';

const routes: Routes = [
  
  { path: '', redirectTo: 'professor-login', pathMatch: 'full' }, 
  { path: 'op-register', component: OperatorRegisterComponent},
  {
    path: 'op-view', 
    component: OperatorViewComponent, 
    children: [
      {path: 'prestamo-activo', component: PrestamoActivoComponent},
      {path: 'reg-devolucion', component: RegDevolucionComponent},
      {path: 'reserva-lab', component: ReservaLabComponent},
      {path: 'reportes', component: ReportesComponent}
    ]
  },
  { path: 'professor-login', component: ProfessorLoginComponent},
  { path: 'operator-login', component: OperatorLoginComponent}, 
  {
    path: 'prof-view', 
    component: ProfessorViewComponent, 
    children: [
      {path: 'aprobar-prestamo', component: AprobarPrestamoComponent},
      {path: 'reservar-lab-professor', component: ReservarLabProfessorComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
