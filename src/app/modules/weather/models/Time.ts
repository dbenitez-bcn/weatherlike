import { WeatherDay } from './WeatherDay';
export class Time {
   constructor(
     public woeid: number,
     public title: string,
     public timeZone: string,
     public weatherDays: Array<WeatherDay>
   ){}

}
