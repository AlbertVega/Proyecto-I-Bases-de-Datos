import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LabBookingComponent } from './lab-booking/lab-booking.component';
import { EditableTableComponent } from './editable-table/editable-table.component';

@NgModule({
  declarations: [
    AppComponent,
    LabBookingComponent,
    EditableTableComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, LabBookingComponent]
})
export class AppModule { }
