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
    _adminService.getUsuarios().subscribe({
      next: (data) => {
        if (data.status) {
          this.rows = data.value;
        } else {
          console.log("Error");
        }
      }
    });

    for (let i = 0; i < this.rows.length; i++) {
      this.editingRow.push(false);
    }
  }

  addRow() {
    this.rows.push({ correo: '' });
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
