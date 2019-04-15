import { Component, OnInit, Input } from '@angular/core';
import { WeatherDay } from '../../models/WeatherDay';
import { WEATHER_STATES } from '../../utils';

@Component({
  selector: 'app-weather-day',
  templateUrl: './weather-day.component.html',
  styleUrls: ['./weather-day.component.css']
})
export class WeatherDayComponent implements OnInit {
  @Input() day: any;
  public stateImage: string;

  constructor() { }

  ngOnInit() {
    this.stateImage = WEATHER_STATES[this.day.weather_state_abbr];
  }

}
