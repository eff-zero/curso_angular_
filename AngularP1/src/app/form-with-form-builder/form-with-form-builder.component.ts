import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-with-form-builder',
  templateUrl: './form-with-form-builder.component.html',
  styleUrls: ['./form-with-form-builder.component.css']
})
export class FormWithFormBuilderComponent {
  constructor(private fb: FormBuilder) { }

  formUser = this.fb.group({
    name: [undefined, Validators.required],
    email: [undefined, [Validators.required, Validators.email]]
  })

  submit() {
    console.log(this.formUser.value)
  }

  getControlByName(controlName: string) {
    return this.formUser.get(controlName) as FormControl
  }

  get name() {
    return this.getControlByName('name')
  }

  get email() {
    return this.getControlByName('email')
  }
}
