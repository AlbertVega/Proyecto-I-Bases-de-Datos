import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import ValidateForm from '../helpers/validateForms';

interface Operador {
  primerNombre: string;
  apellidos: string;
  email: string;
  password: string;
  cedula: number;
  carnet: number;
  nacimiento: string;
}

@Component({
  selector: 'app-operator-register',
  templateUrl: './operator-register.component.html',
  styleUrl: './operator-register.component.css'
})

export class OperatorRegisterComponent implements OnInit{

  formulario!: FormGroup;

  constructor(  
    private http: HttpClient,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      pNombre: ['',Validators.required],
      apellidos: ['',Validators.required],
      email: ['',Validators.required],
      password: ['',Validators.required],
      cedula: ['',Validators.required],
      carnet: ['',Validators.required],
      nacimiento: ['', Validators.required]
    });
  }

  onRegister() {
    if (this.formulario.valid) {
      //Enviar datos
    } else {
      ValidateForm.validateAllFormFields(this.formulario)
    }    
  }
}
