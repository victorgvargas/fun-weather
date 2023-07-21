import { Current } from './current.model';
import { Hourly } from './hourly.model';
import { Minutely } from './minutely.model';

export interface Forecast {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: Current;
  minutely: Minutely;
  hourly: Hourly;
}
