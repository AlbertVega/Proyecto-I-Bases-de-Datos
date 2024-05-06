import { Component } from '@angular/core';

@Component({
  selector: 'app-gestion-activo',
  templateUrl: './gestion-activo.component.html',
  styleUrl: './gestion-activo.component.css'
})
export class GestionActivoComponent {
  rows = [
    { placa: '1234', tipo: 'Computadora', marca: 'HP', fechaCompra: '2021-01-01', prestamoRequiereAprobacion: 'No' },
    { placa: '5678', tipo: 'Computadora', marca: 'HP', fechaCompra: '2021-01-01', prestamoRequiereAprobacion: 'No' },
    { placa: '9101', tipo: 'Computadora', marca: 'HP', fechaCompra: '2021-01-01', prestamoRequiereAprobacion: 'No' }
  ];

  editingRow: boolean[] = [];

  constructor() {
    for (let i = 0; i < this.rows.length; i++) {
      this.editingRow.push(false);
    }
  }

  addRow() {
    this.rows.push({ placa: '', tipo: '', marca: '', fechaCompra: '', prestamoRequiereAprobacion: '' });
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
