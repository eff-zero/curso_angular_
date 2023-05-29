import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-with-form-group',
  templateUrl: './form-with-form-group.component.html',
  styleUrls: ['./form-with-form-group.component.css']
})
export class FormWithFormGroupComponent {
  formUser = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  submit() {
    alert(JSON.stringify(this.formUser.value))
  }


  // getters
  get name() {
    return this.formUser.get('name') as FormControl
  }

  get email() {
    return this.formUser.get('email') as FormControl
  }
}
