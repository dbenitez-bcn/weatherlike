import { Component } from '@angular/core';
import  { Session } from './modules/session/Session';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weatherlike';
  session = new Session();
}
