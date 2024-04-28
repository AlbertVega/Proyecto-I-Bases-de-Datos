import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OperatorLoginComponent } from './operator-login/operator-login.component';
import { OperatorRegisterComponent } from './operator-register/operator-register.component';
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    OperatorLoginComponent,
    OperatorRegisterComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent, OperatorLoginComponent]
})
export class AppModule { }
