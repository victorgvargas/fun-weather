import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Forecast } from '../models/forecast.model';
import { environment } from 'src/environments/environment.development';

const BASE_URL = 'https://api.openweathermap.org/data/3.0/onecall';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private _http: HttpClient) {}

  getForecast(
    lat: number,
    lon: number,
    exclude: string = 'daily',
    appId: string = environment.API_KEY
  ): Observable<Forecast> {
    return this._http.get<Forecast>(
      `${BASE_URL}?lat=${lat}&lon=${lon}&exclude=${exclude}&appId=${appId}`
    );
  }
}
