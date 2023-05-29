import { Component } from '@angular/core';
import { IPerson } from './templateform.interfaces';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent {
  showAlert: boolean = false

  people: Array<IPerson> = [
    { name: 'Jesus', age: 25 },
    { name: 'Salma', age: 20 },
    { name: 'Angela', age: 23 },
  ]

  constructor() { }

  toggleAlert(): void {
    this.showAlert = !this.showAlert
    setTimeout(() => this.showAlert = !this.showAlert , 2000)
  }

  addPerson(person: IPerson): void {
    this.people.push(person)
    this.toggleAlert()
  }
}
