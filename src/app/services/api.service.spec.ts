import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { ApiService } from './api.service';

import { Coords } from '../models/coords.model';
import { environment } from 'src/environments/environment.development';
import { Forecast } from '../models/forecast.model';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });

    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve forecast data', () => {
    const lat = 40.7128;
    const lon = -74.006;
    const mockForecast: Forecast = {
      lat: 40.7128,
      lon: -74.006,
      timezone: 'America/New_York',
      timezone_offset: -14400,
      current: {
        dt: 1679783987,
        sunrise: 1679772755,
        sunset: 1679828372,
        temp: 24.5,
        feels_like: 25.2,
        pressure: 1012,
        humidity: 60,
        dew_point: 17.5,
        uvi: 7.5,
        clouds: 20,
        visibility: 10000,
        wind_speed: 5.8,
        wind_deg: 180,
        wind_gust: 8.2,
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d',
          },
        ],
      },
      minutely: {
        dt: 1679784040,
        precipitation: 0.1,
      },
      hourly: {
        pop: 0.1,
        dt: 1679780400,
        sunrise: 1679772755,
        sunset: 1679828372,
        temp: 24.5,
        feels_like: 25.2,
        pressure: 1012,
        humidity: 60,
        dew_point: 17.5,
        uvi: 7.5,
        clouds: 20,
        visibility: 10000,
        wind_speed: 5.8,
        wind_deg: 180,
        wind_gust: 8.2,
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d',
          },
        ],
      },
    };

    service.getForecast(lat, lon).subscribe((forecast: Forecast) => {
      expect(forecast).toBeTruthy();
      expect(forecast).toEqual(mockForecast);
    });

    const req = httpMock.expectOne(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=daily&appId=${environment.API_KEY}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockForecast);
  });

  it('should get correct coordinates based on city', fakeAsync(() => {
    const city = 'New York';
    const lat = 40.7128;
    const lon = -74.006;
    const limit = 5;
    const appId = environment.API_KEY;

    let result: Coords[] | undefined;

    service.getCoordsByCityName(city).subscribe((value: Coords[]) => {
      result = value;
    });

    const req = httpMock.expectOne(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${limit}&appId=${appId}`
    );
    expect(req.request.method).toBe('GET');
    req.flush([{ lat, lon }]);

    tick();

    const first = result?.[0];
    expect(first).toEqual({ lat, lon });
  }));
});
