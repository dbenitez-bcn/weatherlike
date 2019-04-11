export class WeatherDay {
  constructor(
    public date: string,
    public weatherStateAbbr: string,
    public minTemp: number,
    public maxTemp: number,
    public windSpeed: number,
    public humidity: number,
    public visibility: number,
    public predictability: number
  ){}
}
