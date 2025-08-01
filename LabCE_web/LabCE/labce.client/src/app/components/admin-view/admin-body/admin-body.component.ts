import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-admin-body',
  templateUrl: './admin-body.component.html',
  styleUrl: './admin-body.component.css'
})
export class AdminBodyComponent {
  @Input() collapsed = false;
  @Input() screenWidth = 0;


  // Función que se encarga de retornar la clase que se le asignará al body
  getBodyClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'body-trimmed';
    } else if (this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleClass = 'body-md-screen';
    }
    return styleClass;
  }
}
