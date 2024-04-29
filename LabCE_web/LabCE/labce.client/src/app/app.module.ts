import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, OperatorLoginComponent]
})
export class AppModule { }
