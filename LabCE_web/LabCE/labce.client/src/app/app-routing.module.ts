import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LabBookingComponent } from './lab-booking/lab-booking.component';

const routes: Routes = [
  { path: 'lab-booking', component: LabBookingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
