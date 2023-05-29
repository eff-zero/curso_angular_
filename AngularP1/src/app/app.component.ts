import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  title: string = 'AngularCursoP2';
  showFormModules: boolean = true;

  toggleFormModule(): void {
    this.showFormModules = !this.showFormModules
  }
}
