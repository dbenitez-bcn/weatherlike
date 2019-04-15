import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { IndexWeatherComponent } from './components/index-weather/index-weather.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { WeatherDayComponent } from './components/weather-day/weather-day.component';
import { CityDayComponent } from './components/city-day/city-day.component';


@NgModule({
  declarations: [
    IndexWeatherComponent,
    WeatherCardComponent,
    WeatherDayComponent,
    CityDayComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    IndexWeatherComponent,
    WeatherCardComponent
  ]
})
export class WeatherModule { }
