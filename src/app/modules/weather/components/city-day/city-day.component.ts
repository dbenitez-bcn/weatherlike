import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-city-day',
  templateUrl: './city-day.component.html',
  styleUrls: ['./city-day.component.css']
})
export class CityDayComponent implements OnInit {
  @Input() woeid: number;
  private day: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getTimeByWoeid(this.woeid).subscribe((res) => {
     this.day = res;
   });
  }

}
