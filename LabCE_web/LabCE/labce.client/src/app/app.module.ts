import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminViewComponent } from './components/admin-view/admin-view.component';
import { AdminSidenavComponent } from './components/admin-view/admin-sidenav/admin-sidenav.component';
import { AdminBodyComponent } from './components/admin-view/admin-body/admin-body.component';
import { GestionActivoComponent } from './components/admin-view/gestion-activo/gestion-activo.component';
import { GestionProfComponent } from './components/admin-view/gestion-prof/gestion-prof.component';
import { AprobacionOpComponent } from './components/admin-view/aprobacion-op/aprobacion-op.component';
import { RstPwdComponent } from './components/admin-view/rst-pwd/rst-pwd.component';
import { GestionLabComponent } from './components/admin-view/gestion-lab/gestion-lab.component';
import { OperatorRegisterComponent } from './components/operator-register/operator-register.component';
import { OperatorLoginComponent } from './components/operator-login/operator-login.component';
import { OperatorViewComponent } from './components/operator-view/operator-view.component';
import { BodyComponent } from './components/operator-view/body/body.component';
import { SidenavComponent } from './components/operator-view/sidenav/sidenav.component';
import { PrestamoActivoComponent } from './components/operator-view/prestamo-activo/prestamo-activo.component';
import { ReservaLabComponent } from './components/operator-view/reserva-lab/reserva-lab.component';
import { RegDevolucionComponent } from './components/operator-view/reg-devolucion/reg-devolucion.component';
import { ReportesComponent } from './components/operator-view/reportes/reportes.component';
import { UnsubscribeComponent } from './components/operator-register/unsubscribe/unsubscribe.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminViewComponent,
    AdminSidenavComponent,
    AdminBodyComponent,
    GestionActivoComponent,
    GestionProfComponent,
    AprobacionOpComponent,
    RstPwdComponent,
    GestionLabComponent,
    OperatorLoginComponent,
    OperatorRegisterComponent,
    OperatorViewComponent,
    BodyComponent,
    SidenavComponent,
    PrestamoActivoComponent,
    ReservaLabComponent,
    RegDevolucionComponent,
    ReportesComponent,
    UnsubscribeComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, ReactiveFormsModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, AdminLoginComponent, OperatorLoginComponent],
})
export class AppModule { }
