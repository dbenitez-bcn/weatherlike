export class WeatherDay {
  constructor(
    public id: number,
    public weather_state_name: string,
    public weather_state_abbr: string,
    public created: string,
    public applicable_date: string,
    public min_temp: number,
    public max_temp: number,
    public the_temp: number,
    public wind_speed: number,
    public wind_direcction: number,
    public air_pressure: number,
    public humidity: number,
    public visibility: number,
    public predictability: number
  ){}
}
