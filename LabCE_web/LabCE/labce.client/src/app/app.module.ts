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
import { ProfessorLoginComponent } from './components/professor-login/professor-login.component';
import { ProfessorViewComponent } from './components/professor-view/professor-view.component';
import { AprobarPrestamoComponent } from './components/professor-view/aprobar-prestamo/aprobar-prestamo.component';
import { ReservarLabProfessorComponent } from './components/professor-view/reservar-lab-professor/reservar-lab-professor.component';
import { ProfSidenavComponent } from './components/professor-view/prof-sidenav/prof-sidenav.component';
import { ProfReservaLabComponent } from './components/professor-view/prof-reserva-lab/prof-reserva-lab.component';
import { ProfReservarTableComponent } from './components/professor-view/prof-reserva-lab/prof-reservar-table/prof-reservar-table.component';
import { ProfLabBookingComponent } from './components/professor-view/prof-reserva-lab/prof-lab-booking/prof-lab-booking.component';
import { ProfPrestamoTableComponent } from './components/professor-view/aprobar-prestamo/prof-prestamo-table/prof-prestamo-table.component';

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
    ProfessorLoginComponent,
    ProfessorViewComponent,
    AprobarPrestamoComponent,
    ReservarLabProfessorComponent,
    ProfSidenavComponent,
    ProfPrestamoTableComponent,
    ProfReservaLabComponent,
    ProfReservarTableComponent,
    ProfLabBookingComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, ReactiveFormsModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, ProfessorLoginComponent, OperatorLoginComponent, ProfLabBookingComponent]
})
export class AppModule { }
