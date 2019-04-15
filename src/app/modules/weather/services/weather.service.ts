import { Injectable } from '@angular/core';
import { URLS, ACTIONS, WEATHER_STATES } from '../utils';
import { HttpClient } from '@angular/common/http';
import { Time } from '../models/Time';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private httpClient: HttpClient
  ) {}

  public getTimeByWoeid(woeid: number){
    return this.httpClient.get<Time[]>(URLS.heroku+URLS.metaweatherapi+ACTIONS.location+woeid);
  }
}
