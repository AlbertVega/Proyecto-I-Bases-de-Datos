import { Component } from '@angular/core';

@Component({
  selector: 'app-reg-devolucion',
  templateUrl: './reg-devolucion.component.html',
  styleUrl: './reg-devolucion.component.css'
})
export class RegDevolucionComponent {
  rows = [
    { placa:'2011283', tipo: 'Arduino', marca: 'ArduinoUNO', fecha: '04/05/2017' }
  ];

  editingRow: boolean[] = [];
  selectedRow: number = -1;

  constructor() {
    for(let i = 0; i <this.rows.length; i++) {
      this.editingRow.push(false);
    }
  }

  selected(index: number) {
    this.selectedRow = index;
  }

  removeSelection() {
    this.selectedRow = -1;
  }
}
