import { Component } from '@angular/core';

@Component({
  selector: 'app-prof-reservar-table',
  templateUrl: './prof-reservar-table.component.html',
  styleUrls: ['./prof-reservar-table.component.css']
})
export class ProfReservarTableComponent {
  rows = [
    { nombre: 'Laboratorio 1', tipo: 'Tipo 1', marca: 'Marca 1', cantidadHoras: 5, hora: '10:00' },
    { nombre: 'Laboratorio 2', tipo: 'Tipo 2', marca: 'Marca 2', cantidadHoras: 10, hora: '14:00' }
    // Agrega más objetos según sea necesario
  ];

  AprobarSolicitud(index: number) {
    console.log('Solicitud aprobada en la fila ' + index);
  }

  DenegarSolicitud(index: number) {
    console.log('Solicitud denegada en la fila ' + index);
  }
}
