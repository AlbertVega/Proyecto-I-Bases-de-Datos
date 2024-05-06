import { Component } from '@angular/core';

@Component({
  selector: 'app-gestion-lab',
  templateUrl: './gestion-lab.component.html',
  styleUrl: './gestion-lab.component.css'
})
export class GestionLabComponent {
  rows = [
    { nombre: 'F2-08', capacidadPersonas: '20', capacidadComputadoras: '20', facilidades: 'Proyector, pizarra, aire acondicionado' },
    { nombre: 'F2-09', capacidadPersonas: '20', capacidadComputadoras: '20', facilidades: 'Proyector, pizarra, aire acondicionado'},
    { nombre: 'F2-10', capacidadPersonas: '20', capacidadComputadoras: '20', facilidades: 'Proyector, pizarra, aire acondicionado'},
    { nombre: 'F2-11', capacidadPersonas: '20', capacidadComputadoras: '20', facilidades: 'Proyector, pizarra, aire acondicionado'},
  ];

  editingRow: boolean[] = [];

  constructor() {
    for (let i = 0; i < this.rows.length; i++) {
      this.editingRow.push(false);
    }
  }

  addRow() {
    this.rows.push({ nombre: '', capacidadPersonas: '', capacidadComputadoras: '', facilidades: '' });
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
