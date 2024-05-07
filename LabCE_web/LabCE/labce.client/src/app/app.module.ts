import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OperatorRegisterComponent } from './components/operator-register/operator-register.component';
import { ReactiveFormsModule } from '@angular/forms'
import { OperatorLoginComponent } from './components/operator-login/operator-login.component';
import { OperatorViewComponent } from './components/operator-view/operator-view.component';
import { BodyComponent } from './components/operator-view/body/body.component';
import { SidenavComponent } from './components/operator-view/sidenav/sidenav.component';
import { PrestamoActivoComponent } from './components/operator-view/prestamo-activo/prestamo-activo.component';
import { ReservaLabComponent } from './components/operator-view/reserva-lab/reserva-lab.component';
import { RegDevolucionComponent } from './components/operator-view/reg-devolucion/reg-devolucion.component';
import { ReportesComponent } from './components/operator-view/reportes/reportes.component';

@NgModule({
  declarations: [
    AppComponent,
    OperatorLoginComponent,
    OperatorRegisterComponent,
    OperatorViewComponent,
    BodyComponent,
    SidenavComponent,
    PrestamoActivoComponent,
    ReservaLabComponent,
    RegDevolucionComponent,
    ReportesComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, OperatorLoginComponent]
})
export class AppModule { }
