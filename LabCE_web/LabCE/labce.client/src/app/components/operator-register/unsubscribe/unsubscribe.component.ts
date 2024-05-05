import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ValidateForm from '../../../helpers/validateForms';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrl: './unsubscribe.component.css'
})
export class UnsubscribeComponent {

  formulario!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onUnsub() {
    if (this.formulario.valid) {
      console.log("true");
    } else {
      ValidateForm.validateAllFormFields(this.formulario);
    }
  }
}
