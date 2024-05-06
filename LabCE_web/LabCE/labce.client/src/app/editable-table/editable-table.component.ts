import { Component } from '@angular/core';

@Component({
  selector: 'app-editable-table',
  templateUrl: './editable-table.component.html',
  styleUrl: './editable-table.component.css'
})
export class EditableTableComponent {
  rows = [
    { placa: '1234', tipo: 'Computadora', marca: 'HP', fechadecompra: '2021-01-01', prestamoRequiereAprobacion: 'No' },
    { placa: '5678', tipo: 'Computadora', marca: 'HP', fechadecompra: '2021-01-01', prestamoRequiereAprobacion: 'No' },
    { placa: '9101', tipo: 'Computadora', marca: 'HP', fechadecompra: '2021-01-01', prestamoRequiereAprobacion: 'No' }

  ];

  editingRow: boolean[] = [];

  constructor() {
    for(let i = 0; i <this.rows.length; i++) {
      this.editingRow.push(false);
    }
  }

  addRow() {
    this.rows.push({ name: '', email: '' });
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
