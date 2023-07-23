import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { switchMap, take, tap } from 'rxjs';
import { Forecast } from './models/forecast.model';
import { Coords } from './models/coords.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  forecast: Forecast | null = null;
  currentCity = '';
  lat = 51.477928;
  lon = -0.001545;

  constructor(private _apiService: ApiService) {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lon = position.coords.longitude;
      });
    }
  }

  ngOnInit(): void {
    this._apiService.getForecast(this.lat, this.lon).pipe(take(1)).subscribe();
  }

  onSearch(query: string) {
    this.currentCity = query;

    this._apiService
      .getCoordsByCityName(query)
      .pipe(
        switchMap((coords: Coords[]) =>
          this._apiService.getForecast(coords[0].lat, coords[0].lon)
        ),
        tap((weather) => (this.forecast = weather)),
        take(1)
      )
      .subscribe();
  }
}
