import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import ValidateForm from '../helpers/validateForms';
import { StrongPasswordRegx } from '../helpers/PWRegEx';
import { Registro } from '../Interfaces/registro';
import { ServicioOperadorService } from '../Services/servicio-operador.service';


@Component({
  selector: 'app-operator-register',
  templateUrl: './operator-register.component.html',
  styleUrl: './operator-register.component.css'
})

export class OperatorRegisterComponent implements OnInit{

  formulario!: FormGroup;

  constructor(  
    private _operadorServicio: ServicioOperadorService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      pNombre: ['',Validators.required],
      apellidos: ['',Validators.required],
      email: ['',Validators.required],
      password: ['', [Validators.required,Validators.pattern(StrongPasswordRegx)]],
      cedula: ['',Validators.required],
      carnet: ['',Validators.required],
      nacimiento: ['', Validators.required]
    });
  }

  onRegister() {
    if (this.formulario.valid) {
      const request: Registro = {
        pNombre: this.formulario.value.pNombre,
        apellidos: this.formulario.value.apellidos,
        email: this.formulario.value.email,
        password: this.formulario.value.password,
        cedula: this.formulario.value.cedula,
        carnet: this.formulario.value.carnet,
        nacimiento: this.formulario.value.nacimiento
      }

      this._operadorServicio.register(request).subscribe({
        next: (data) => {
          if (data.status) {
            console.log(data.value);
          } else {
            console.log("Error");
          }
        }
      })
    } else {
      ValidateForm.validateAllFormFields(this.formulario)
    }    
  }

  get passwordFormField() {
    return this.formulario.get('password');
  }
}
