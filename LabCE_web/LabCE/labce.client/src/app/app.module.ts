import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { SidenavComponent } from './admin-view/sidenav/sidenav.component';
import { BodyComponent } from './admin-view/body/body.component';
import { GestionActivoComponent } from './admin-view/gestion-activo/gestion-activo.component';
import { GestionProfComponent } from './admin-view/gestion-prof/gestion-prof.component';
import { AprobacionOpComponent } from './admin-view/aprobacion-op/aprobacion-op.component';
import { RstPwdComponent } from './admin-view/rst-pwd/rst-pwd.component';
import { GestionLabComponent } from './admin-view/gestion-lab/gestion-lab.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminViewComponent,
    SidenavComponent,
    BodyComponent,
    GestionActivoComponent,
    GestionProfComponent,
    AprobacionOpComponent,
    RstPwdComponent,
    GestionLabComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, AdminLoginComponent]
})
export class AppModule { }
