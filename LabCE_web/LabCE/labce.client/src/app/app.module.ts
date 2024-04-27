import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OperatorLoginComponent } from './operator-login/operator-login.component';
import { OperatorRegisterComponent } from './operator-register/operator-register.component';

@NgModule({
  declarations: [
    AppComponent,
    OperatorLoginComponent,
    OperatorRegisterComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent, OperatorLoginComponent]
})
export class AppModule { }
