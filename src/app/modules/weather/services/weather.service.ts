import { Injectable } from '@angular/core';
import { URLS, ACTIONS, WEATHER_STATES } from '../utils';
import { HttpClientModule } from '@angular/common/http';
import { Time } from '../models/Time';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private hhtpClient: HttpClientModule
  ) {}

  // async get
}
