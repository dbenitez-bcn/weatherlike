import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexWeatherComponent } from './components/index-weather/index-weather.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';


@NgModule({
  declarations: [
    IndexWeatherComponent,
    WeatherCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IndexWeatherComponent,
    WeatherCardComponent
  ]
})
export class WeatherModule { }
