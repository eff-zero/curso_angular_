import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-form-with-form-control',
  templateUrl: './form-with-form-control.component.html',
  styleUrls: ['./form-with-form-control.component.css']
})
export class FormWithFormControlComponent {
  name: FormControl = new FormControl(undefined, [Validators.required])
  email: FormControl = new FormControl(undefined, [Validators.required, Validators.email])
}
