import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
@Component({
  selector: 'app-professor-login',
  templateUrl: './professor-login.component.html',
  styleUrl: './professor-login.component.css'
})
export class ProfessorLoginComponent implements OnInit {

  constructor(private router: Router) { } // Inject Router service

  ngOnInit(): void {
  }
}