import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperatorLoginComponent } from './components/operator-login/operator-login.component';
import { OperatorViewComponent } from './components/operator-view/operator-view.component';
import { PrestamoActivoComponent } from './components/operator-view/prestamo-activo/prestamo-activo.component';
import { RegDevolucionComponent } from './components/operator-view/reg-devolucion/reg-devolucion.component';
import { ReservaLabComponent } from './components/operator-view/reserva-lab/reserva-lab.component';
import { ReportesComponent } from './components/operator-view/reportes/reportes.component';

const routes: Routes = [
  
  {path: 'op-login', component: OperatorLoginComponent},
  {
    path: 'op-view', 
    component: OperatorViewComponent, 
    children: [
      {path: 'prestamo-activo', component: PrestamoActivoComponent},
      {path: 'reg-devolucion', component: RegDevolucionComponent},
      {path: 'reserva-lab', component: ReservaLabComponent},
      {path: 'reportes', component: ReportesComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
