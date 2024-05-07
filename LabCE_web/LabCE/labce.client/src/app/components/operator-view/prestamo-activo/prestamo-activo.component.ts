import { Component } from '@angular/core';

@Component({
  selector: 'app-prestamo-activo',
  templateUrl: './prestamo-activo.component.html',
  styleUrl: './prestamo-activo.component.css'
})
export class PrestamoActivoComponent {
  rows = [
    { placa:'2011283', tipo: 'Arduino', marca: 'ArduinoUNO', fecha: '04/05/2017' }
  ];

  editingRow: boolean[] = [];
  selectedRow: number = -1;
  modalSwitch: boolean = false;
  selectedType: string = '';

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
  
  openModal() {
    this.modalSwitch = true;
  }

}
