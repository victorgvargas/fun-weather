import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-current-temp-card',
  templateUrl: './current-temp-card.component.html',
  styleUrls: ['./current-temp-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrentTempCardComponent {
  @Input() cityName = '';
  @Input() feelsLike = 0;
  @Input() temperature = 0;
  @Input() weather = '';
}
