import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Forecast } from 'src/app/models/forecast.model';

@Component({
  selector: 'app-weather-grid',
  templateUrl: './weather-grid.component.html',
  styleUrls: ['./weather-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherGridComponent {
  @Input() city = '';
  @Input() forecast: Forecast | null = null;
}
