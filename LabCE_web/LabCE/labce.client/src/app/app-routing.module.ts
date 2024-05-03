import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperatorLoginComponent } from './operator-login/operator-login.component';

const routes: Routes = [
  
  {path: 'op-login', component: OperatorLoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
