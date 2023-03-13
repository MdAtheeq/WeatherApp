import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api } from 'src/api/api';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  public url = '';

  getWeatherData(cityName: string): Observable<WeatherData>{

   this.url = api.weatherApiBaseUrl + '/city/' + cityName;
   return this.http.get<WeatherData>(this.url = api.weatherApiBaseUrl + '/city/' + cityName, {
      headers: new HttpHeaders()
      .set(api.XRapidAPIHostHeaderName, api.XRapidAPIHostHeaderValue)
      .set(api.XRapidAPIKeyHeaderName, api.XRapidAPIKeyHeaderValue)
      // params: new HttpParams()
      // .append('city', 'city')
      // .append('', cityName)

    })
  }
}
