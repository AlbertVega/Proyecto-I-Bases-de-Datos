import { Component } from '@angular/core';
import { AdminService } from '../../../Services/admin.service';
import { OpAproved } from '../../../Interfaces/op-aproved';

@Component({
  selector: 'app-aprobacion-op',
  templateUrl: './aprobacion-op.component.html',
  styleUrl: './aprobacion-op.component.css'
})
export class AprobacionOpComponent {
  rows = [
    { cedula: '123456789', carnet: '123124', nombre: 'Juan', apellido1: 'Perez', apellido2: 'Gonzalez', edad: '25', fecha_nacimiento: '01/01/1995', email: 'jpg@gmail.com' },
    { cedula: '987654321', carnet: '123124', nombre: 'Maria', apellido1: 'Gonzalez', apellido2: 'Perez', edad: '20', fecha_nacimiento: '01/01/2000', email: 'aAD!@gmail.com' },
    { cedula: '123456789', carnet: '123124', nombre: 'Juan', apellido1: 'Perez', apellido2: 'Gonzalez', edad: '25', fecha_nacimiento: '01/01/1995', email: 'ghh@gmail.com' },
  ];

  editingRow: boolean[] = [];

  /*
  * Constructor
  * Entradas: servicio de admin
  * Salidas: ninguna
  * Funcionamiento: se encarga de obtener los operadores pendientes de aprobación
  */
  constructor(
    private _adminService: AdminService,
  ) {
    _adminService.getOperators().subscribe({
      next: (data) => {
        if (data.status) {
          this.rows = data.value;
        } else {
          console.log("Error");
        }      
      }
    });

    for (let i = 0; i < this.rows.length; i++) {
      this.editingRow.push(false);
    }
  }

  /*
   * AddRow
   * Entradas: ninguna
   * Salidas: ninguna
   * Funcionamiento: agrega una fila a la tabla
   */
  addRow() {
    this.rows.push({ cedula: '', carnet: '', nombre: '', apellido1: '', apellido2: '', edad: '', fecha_nacimiento: '', email: '' });
    this.editingRow.push(true);
  }

  /*
  * EditRow
  * Entradas: index de la fila
  * Salidas: ninguna
  * Funcionamiento: habilita la edición de la fila
  */
  editRow(index: number) {
    this.editingRow[index] = true;
  }

  /*
  * SaveRow
  * Entradas: index de la fila
  * Salidas: ninguna
  * Funcionamiento: deshabilita la edición de la fila
  */
  saveRow(index: number) {
    this.editingRow[index] = false;
  }

  /*
  * DeleteRow
  * Entradas: index de la fila
  * Salidas: ninguna
  * Funcionamiento: elimina la fila de la tabla
  */
  deleteRow(index: number) {
    this.rows.splice(index, 1);
    this.editingRow.splice(index, 1);
  }

  /*
  * onSetOperators
  * Entradas: index de la fila
  * Salidas: ninguna
  * Funcionamiento: envía la petición al servidor para aprobar al operador
  */
  onSetOperators(index: number) {
    const request: OpAproved = {
      cedula: this.rows[index].cedula,
      aproved: true
    }

    this._adminService.setOperators(request).subscribe({
      next: (data) => {
        if (data.status) {
          this.deleteRow(index);
        } else {
          console.log("Error");
        }
      }
    });
  }
}
