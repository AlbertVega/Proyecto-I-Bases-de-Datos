import { Component } from '@angular/core';
import { Login } from '../../Interfaces/login';
import { AdminService } from '../../Services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {

  email: string = '';
  password: string = '';

  constructor(
    private _adminService: AdminService
  ) { }

  /*
   * onLogin
   * Entradas: email y password del operador
   * Salidas: respuesta de la petición
   * Funcionamiento: se encarga de enviar la petición de login al servidor
   */
  onLogin() {
    const request: Login = {
      email: this.email,
      password: this.password
    }

    this._adminService.login(request).subscribe({
      next: (data) => {
        if (data.status) {
          console.log(data.status);
        } else {
          console.log("Error Login");
        }
      }
    });


  }



}
