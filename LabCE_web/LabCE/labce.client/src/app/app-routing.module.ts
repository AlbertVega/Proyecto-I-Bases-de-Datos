import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LabBookingComponent } from './lab-booking/lab-booking.component';
import { EditableTableComponent } from './editable-table/editable-table.component';

const routes: Routes = [
  { path: 'lab-booking', component: LabBookingComponent },
  { path: 'editable-table', component: EditableTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
