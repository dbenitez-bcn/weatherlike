import { WeatherDay } from './WeatherDay';
export class Time {
   constructor(
     public consolidated_weather: Array<WeatherDay>,
     public time: Date,
     public sun_rise: Date,
     public sun_set: Date,
     public timezone_name: string,
     public parent: any,
     public sources: any,
     public title: string,
     public location_type: string,
     public woeid: number,
     public latt_long: string,
     public timezone: string
   ){}
}
