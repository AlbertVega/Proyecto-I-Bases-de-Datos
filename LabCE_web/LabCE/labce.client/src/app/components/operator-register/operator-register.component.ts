import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import ValidateForm from '../../helpers/validateForms';
import { StrongPasswordRegx } from '../../helpers/PWRegEx';
import { Registro } from '../../Interfaces/registro';
import { ServicioOperadorService } from '../../Services/servicio-operador.service';


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
      email: ['',[Validators.required, this.emailValidation]],
      password: ['', [Validators.required,Validators.pattern(StrongPasswordRegx)]],
      cedula: ['',Validators.required],
      carnet: ['',Validators.required],
      nacimiento: ['', Validators.required]
    });
  }

  onRegister() {
    if (this.formulario.valid) {
      let Apellidos: string[] = this.formulario.value.apellidos.split(' ');

      const request: Registro = {
        nombre: this.formulario.value.pNombre,
        apellido1: Apellidos[0],
        apellido2: Apellidos[1],
        email: this.formulario.value.email,
        op_password: this.formulario.value.password,
        cedula: this.formulario.value.cedula,
        carnet: this.formulario.value.carnet,
        nacimiento: new Date(this.formulario.value.nacimiento),
        aprobado: false
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

  getError(control: any): string {
    if (control.errors?.required && control.touched)
      return "Campo requerido";
    else if (control.errors?.emailError && control.touched)
      return 'Formato incorrecto';
    else return '';
  }

  emailValidation(control: AbstractControl) {
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/;
    const value = control.value;
    if (!pattern.test(value) && control.touched) {
      return {
        emailError: true
      }
    } else return null;
  }
}
