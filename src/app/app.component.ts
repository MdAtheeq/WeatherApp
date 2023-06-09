import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherService){}

  cityName: string = 'Chennai'
  weatherData?: WeatherData;
  ngOnInit(): void{
    this.getweatherData(this.cityName)
    this.cityName = '';
  // this.weatherService.getWeatherData('Chennai')
  // .subscribe({
  //   next: (response) => {
  //     this.weatherData = response;
  //     console.log(response);
  //   }
  // })
  }

  onSubmit(){
    this.getweatherData(this.cityName)
    this.cityName = '';
  }

  private getweatherData(cityName: string){
    this.weatherService.getWeatherData(cityName)
  .subscribe({
    next: (response) => {
      this.weatherData = response;
      console.log(response);
    }
  })
  }
}



