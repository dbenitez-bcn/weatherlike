import { Component, OnInit } from '@angular/core';

import { Session } from '../../Session';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  private session: Session;
  constructor() {
    this.session = new Session();
  }

  ngOnInit() {
  }
}
