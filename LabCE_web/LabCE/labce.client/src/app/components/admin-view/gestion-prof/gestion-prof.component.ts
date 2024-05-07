import { Component } from '@angular/core';
import { AdminService } from '../../../Services/admin.service';

@Component({
  selector: 'app-gestion-prof',
  templateUrl: './gestion-prof.component.html',
  styleUrl: './gestion-prof.component.css'
})
export class GestionProfComponent {
  rows = [
    { cedula: '123456789', nombre: 'Juan', apellido1: 'Perez', apellido2: 'Gonzalez', edad: '25', fecha_nacimiento: '01/01/1995', email: 'jpg@gmail.com' },
    { cedula: '987654321', nombre: 'Maria', apellido1: 'Gomez', apellido2: 'Gonzalez', edad: '30', fecha_nacimiento: '01/01/1990', email: 'mgg@gmail.com' },
    { cedula: '456789123', nombre: 'Pedro', apellido1: 'Lopez', apellido2: 'Gonzalez', edad: '35', fecha_nacimiento: '01/01/1985', email: 'plg@prontonmail.com' },
  ];

  editingRow: boolean[] = [];

  /*
  * Constructor
  * Entradas: servicio de admin
  * Salidas: ninguna
  * Funcionamiento: se encarga de obtener los profesores
  */
  constructor(
    private _adminService: AdminService,
  ) {
    _adminService.getProfesor().subscribe({
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
    this.rows.push({ cedula: '', nombre: '', apellido1: '', apellido2: '', edad: '', fecha_nacimiento: '', email: '' });
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
}
