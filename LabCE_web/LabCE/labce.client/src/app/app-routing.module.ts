import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperatorLoginComponent } from './operator-login/operator-login.component';
import { OperatorRegisterComponent } from './operator-register/operator-register.component';

const routes: Routes = [
  
  { path: 'op-login', component: OperatorLoginComponent },
  { path: 'op-register', component: OperatorRegisterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
