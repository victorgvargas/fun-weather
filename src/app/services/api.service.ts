import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Forecast } from '../models/forecast.model';
import { environment } from 'src/environments/environment.development';
import { Coords } from '../models/coords.model';

const BASE_URL = 'https://api.openweathermap.org/data/3.0/onecall';
const GEOCODING_URL = 'http://api.openweathermap.org/geo/1.0/direct';

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

  getCoordsByCityName(
    city: string,
    appId: string = environment.API_KEY,
    limit: number = 5
  ): Observable<Coords[]> {
    return this._http.get<Coords[]>(
      `${GEOCODING_URL}?q=${city}&limit=${limit}&appId=${appId}`
    );
  }
}
