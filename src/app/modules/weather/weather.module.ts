import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexWeatherComponent } from './components/index-weather/index-weather.component';


@NgModule({
  declarations: [
    IndexWeatherComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IndexWeatherComponent
  ]
})
export class WeatherModule { }
