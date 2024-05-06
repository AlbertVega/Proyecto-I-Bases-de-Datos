import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { GestionActivoComponent } from './admin-view/gestion-activo/gestion-activo.component';
import { GestionLabComponent } from './admin-view/gestion-lab/gestion-lab.component';
import { GestionProfComponent } from './admin-view/gestion-prof/gestion-prof.component';
import { AprobacionOpComponent } from './admin-view/aprobacion-op/aprobacion-op.component';
import { RstPwdComponent } from './admin-view/rst-pwd/rst-pwd.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
