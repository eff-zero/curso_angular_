import {Component} from '@angular/core';
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'AngularCursoP2 - Routing';
  constructor(public router: Router) { }

  invalidRoute(route: Route): boolean {
    if (!route) return false
    return route.path?.includes(':') || route.path == '**'
  }

}
