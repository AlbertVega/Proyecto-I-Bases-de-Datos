import { Component } from '@angular/core';

@Component({
  selector: 'app-aprobacion-op',
  templateUrl: './aprobacion-op.component.html',
  styleUrl: './aprobacion-op.component.css'
})
export class AprobacionOpComponent {
  rows = [
    { cedula: '123456789', carnet: '123124', nombre: 'Juan', apellido1: 'Perez', apellido2: 'Gonzalez', edad: '25', fechaNacimiento: '01/01/1995', correo: 'jpg@gmail.com' },
    { cedula: '987654321', carnet: '123124', nombre: 'Maria', apellido1: 'Gonzalez', apellido2: 'Perez', edad: '20', fechaNacimiento: '01/01/2000', correo: 'aAD!@gmail.com' },
    { cedula: '123456789', carnet: '123124', nombre: 'Juan', apellido1: 'Perez', apellido2: 'Gonzalez', edad: '25', fechaNacimiento: '01/01/1995', correo: 'ghh@gmail.com' },
  ];

  editingRow: boolean[] = [];

  constructor() {
    for (let i = 0; i < this.rows.length; i++) {
      this.editingRow.push(false);
    }
  }

  addRow() {
    this.rows.push({ cedula: '', carnet: '', nombre: '', apellido1: '', apellido2: '', edad: '', fechaNacimiento: '', correo: '' });
    this.editingRow.push(true);
  }

  editRow(index: number) {
    this.editingRow[index] = true;
  }

  saveRow(index: number) {
    this.editingRow[index] = false;
  }

  deleteRow(index: number) {
    this.rows.splice(index, 1);
    this.editingRow.splice(index, 1);
  }
}
