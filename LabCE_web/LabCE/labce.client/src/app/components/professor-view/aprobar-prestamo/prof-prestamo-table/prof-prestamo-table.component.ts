import { Component } from '@angular/core';

@Component({
  selector: 'app-prof-prestamo-table',
  templateUrl: './prof-prestamo-table.component.html',
  styleUrls: ['./prof-prestamo-table.component.css']
})
export class ProfPrestamoTableComponent {
  rows = [
    { nombre: 'Producto 1', tipo: 'Tipo 1', marca: 'Marca 1', cantidadHoras: 5, hora: '10:00' },
    { nombre: 'Producto 2', tipo: 'Tipo 2', marca: 'Marca 2', cantidadHoras: 10, hora: '14:00' }
  ];



  AprobarSolicitud(index: number) {
    console.log('Solicitud aprobada en la fila ' + index);
  }

  DenegarSolicitud(index: number) {
    console.log('Solicitud denegada en la fila ' + index);
  }
}

