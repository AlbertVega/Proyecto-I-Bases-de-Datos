import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminViewComponent } from './components/admin-view/admin-view.component';
import { GestionActivoComponent } from './components/admin-view/gestion-activo/gestion-activo.component';
import { GestionLabComponent } from './components/admin-view/gestion-lab/gestion-lab.component';
import { GestionProfComponent } from './components/admin-view/gestion-prof/gestion-prof.component';
import { AprobacionOpComponent } from './components/admin-view/aprobacion-op/aprobacion-op.component';
import { RstPwdComponent } from './components/admin-view/rst-pwd/rst-pwd.component';
import { OperatorRegisterComponent } from './components/operator-register/operator-register.component';
import { OperatorLoginComponent } from './components/operator-login/operator-login.component';
import { OperatorViewComponent } from './components/operator-view/operator-view.component';
import { PrestamoActivoComponent } from './components/operator-view/prestamo-activo/prestamo-activo.component';
import { RegDevolucionComponent } from './components/operator-view/reg-devolucion/reg-devolucion.component';
import { ReservaLabComponent } from './components/operator-view/reserva-lab/reserva-lab.component';
import { ReportesComponent } from './components/operator-view/reportes/reportes.component';
import { UnsubscribeComponent } from './components/operator-register/unsubscribe/unsubscribe.component';
import { ProfessorLoginComponent } from './components/professor-login/professor-login.component';
import { ProfessorViewComponent } from './components/professor-view/professor-view.component';
import { ReservarLabProfessorComponent } from './components/professor-view/reservar-lab-professor/reservar-lab-professor.component';
import { AprobarPrestamoComponent } from './components/professor-view/aprobar-prestamo/aprobar-prestamo.component';

  
const routes: Routes = [
  { path: 'admin-login', component: AdminLoginComponent },
  {
    path: 'admin-view',
    component: AdminViewComponent,
    children: [
      { path: 'gestion-lab', component: GestionLabComponent },
      { path: 'gestion-activo', component: GestionActivoComponent },
      { path: 'gestion-prof', component: GestionProfComponent },
      { path: 'aprobacion-op', component: AprobacionOpComponent },
      { path: 'rst-pwd', component: RstPwdComponent }
    ]
    
  },
  {
    path: 'op-register', component: OperatorRegisterComponent,
    children: [
      {path: 'unsubscribe', component: UnsubscribeComponent}
    ]
  },
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
  { path: 'prof-login', component: ProfessorLoginComponent},
  { path: 'op-login', component: OperatorLoginComponent},
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
