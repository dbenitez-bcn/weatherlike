import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { IndexWeatherComponent } from './components/index-weather/index-weather.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { WeatherDayComponent } from './components/weather-day/weather-day.component';


@NgModule({
  declarations: [
    IndexWeatherComponent,
    WeatherCardComponent,
    WeatherDayComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    IndexWeatherComponent,
    WeatherCardComponent
  ]
})
export class WeatherModule { }
