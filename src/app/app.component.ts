import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { switchMap, take, tap, Observable, of, finalize } from 'rxjs';
import { Forecast } from './models/forecast.model';
import { Coords } from './models/coords.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  forecast: Forecast | null = null;
  currentCity = 'Lisbon';
  geolocationEnabled = false;
  geolocationErrorMsg =
    "Please enable geolocation in order to get your location's current weather!";
  loading = true;
  lat = 38.736946;
  lon = -9.142685;

  constructor(private _apiService: ApiService) {}

  ngOnInit(): void {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lon = position.coords.longitude;

        this._apiService
          .getForecast(this.lat, this.lon)
          .pipe(
            tap(() => (this.loading = true)),
            tap(() => (this.geolocationEnabled = true)),
            tap((forecast) => (this.forecast = forecast)),
            take(1),
            finalize(() => (this.loading = false))
          )
          .subscribe();
      });
    }
  }

  onSearch(query: string) {
    this.currentCity = query;

    this._apiService
      .getCoordsByCityName(query)
      .pipe(
        switchMap((coords: Coords[]): Observable<Forecast | null> => {
          if (coords.length > 0)
            return this._apiService.getForecast(coords[0].lat, coords[0].lon);
          else return of(null);
        }),
        tap((forecast: Forecast | null) => (this.forecast = forecast || null)),
        take(1)
      )
      .subscribe();
  }
}
