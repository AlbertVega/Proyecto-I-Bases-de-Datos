import { Component } from '@angular/core';
import { AdminService } from '../../../Services/admin.service';

@Component({
  selector: 'app-rst-pwd',
  templateUrl: './rst-pwd.component.html',
  styleUrl: './rst-pwd.component.css'
})
export class RstPwdComponent {
  rows = [
    { correo: 'jpg@gmail.com' },
    { correo: 'aAD!@gmail.com' },
    { correo: 'ghh@gmail.com' },
  ];

  editingRow: boolean[] = [];

  constructor(
    private _adminService: AdminService,
  ) {
    //_adminService.getUsuarios().subscribe({
    //  next: (data) => {
    //    if (data.status) {
    //      this.rows = data.value;
    //    } else {
    //      console.log("Error");
    //    }
    //  }
    //});

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
    this.rows.push({ correo: '' });
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
