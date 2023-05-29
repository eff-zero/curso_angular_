import { Component } from '@angular/core';
import { IPerson } from '../templateform/templateform.interfaces';

@Component({
  selector: 'app-ng-model-form',
  templateUrl: './ng-model-form.component.html',
  styleUrls: ['./ng-model-form.component.css']
})
export class NgModelFormComponent {
  person: IPerson = {
    age: undefined,
    name: undefined
  }

  printData() {
    alert(JSON.stringify(this.person))
  }
}
