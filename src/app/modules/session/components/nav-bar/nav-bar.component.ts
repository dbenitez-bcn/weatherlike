import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  private isLogged: boolean;

  constructor() { }

  ngOnInit() {
    this.isLogged = this.checkIsLogged();
  }

  checkIsLogged(){
    if(localStorage.getItem("token"))return true;
    return false;
  }
}
