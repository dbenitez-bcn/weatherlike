import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {
  @Input() time: any;
  @Input() dateSelected: any;


  constructor() { }

  ngOnInit() {
  }

}
