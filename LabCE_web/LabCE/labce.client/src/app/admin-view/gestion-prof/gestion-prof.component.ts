import { Component } from '@angular/core';

@Component({
  selector: 'app-gestion-prof',
  templateUrl: './gestion-prof.component.html',
  styleUrl: './gestion-prof.component.css'
})
export class GestionProfComponent {
  rows = [
    { cedula: '123456789', nombre: 'Juan', apellido1: 'Perez', apellido2: 'Gonzalez', edad: '25', fechaNacimiento: '01/01/1995', correo: 'jpg@gmail.com' },
    { cedula: '987654321', nombre: 'Maria', apellido1: 'Gomez', apellido2: 'Gonzalez', edad: '30', fechaNacimiento: '01/01/1990', correo: 'mgg@gmail.com' },
    { cedula: '456789123', nombre: 'Pedro', apellido1: 'Lopez', apellido2: 'Gonzalez', edad: '35', fechaNacimiento: '01/01/1985', correo: 'plg@prontonmail.com' },
  ];

  editingRow: boolean[] = [];

  constructor() {
    for (let i = 0; i < this.rows.length; i++) {
      this.editingRow.push(false);
    }
  }

  addRow() {
    this.rows.push({ cedula: '', nombre: '', apellido1: '', apellido2: '', edad: '', fechaNacimiento: '', correo: '' });
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
