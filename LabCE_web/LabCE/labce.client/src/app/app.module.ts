import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { SidenavComponent } from './admin-view/sidenav/sidenav.component';
import { BodyComponent } from './admin-view/body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminViewComponent,
    SidenavComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, AdminLoginComponent]
})
export class AppModule { }
