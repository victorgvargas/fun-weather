import { Forecast } from 'src/app/models/forecast.model';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherGridComponent } from './weather-grid.component';
import { CurrentTempCardComponent } from '../current-temp-card/current-temp-card.component';
import { TimePipe } from 'src/app/pipes/time.pipe';
import { UviPipe } from 'src/app/pipes/uvi.pipe';
import { DistancePipe } from 'src/app/pipes/distance.pipe';
import { SpeedPipe } from 'src/app/pipes/speed.pipe';

describe('WeatherGridComponent', () => {
  let component: WeatherGridComponent;
  let fixture: ComponentFixture<WeatherGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        WeatherGridComponent,
        CurrentTempCardComponent,
        TimePipe,
        UviPipe,
        DistancePipe,
        SpeedPipe,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherGridComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display "Please insert a valid location!" if forecast is null', () => {
    component.forecast = null;
    fixture.detectChanges();
    const messageElement = fixture.nativeElement.querySelector('p');
    expect(messageElement.textContent).toContain(
      'Please insert a valid location!'
    );
  });
});
