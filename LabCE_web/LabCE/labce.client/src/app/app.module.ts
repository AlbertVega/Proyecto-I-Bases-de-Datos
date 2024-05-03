import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OperatorLoginComponent } from './operator-login/operator-login.component';
import { ProfessorLoginComponent } from './professor-login/professor-login.component';
import { ProfessorViewComponent } from './professor-view/professor-view.component';
import { BodyComponent } from './professor-view/body/body.component';
import { SidenavComponent } from './professor-view/sidenav/sidenav.component';
import { AprobarPrestamoComponent } from './professor-view/aprobar-prestamo/aprobar-prestamo.component';
import { ReservarLaboratorioComponent } from './professor-view/reservar-laboratorio/reservar-laboratorio.component';
import { CambiarPasswordComponent } from './professor-view/cambiar-password/cambiar-password.component';

@NgModule({
  declarations: [
    AppComponent,
    OperatorLoginComponent,
    ProfessorLoginComponent,
    ProfessorViewComponent,
    SidenavComponent,
    BodyComponent,
    AprobarPrestamoComponent,
    ReservarLaboratorioComponent,
    CambiarPasswordComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, OperatorLoginComponent]
})
export class AppModule { }

