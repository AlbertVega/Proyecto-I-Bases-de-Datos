import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LabBookingComponent } from './lab-booking/lab-booking.component';

@NgModule({
  declarations: [
    AppComponent,
    LabBookingComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, LabBookingComponent]
})
export class AppModule { }
