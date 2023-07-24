import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrentTempCardComponent } from './current-temp-card.component';
import { TemperaturePipe } from 'src/app/pipes/temperature.pipe';

describe('CurrentTempCardComponent', () => {
  let component: CurrentTempCardComponent;
  let fixture: ComponentFixture<CurrentTempCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrentTempCardComponent, TemperaturePipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentTempCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display correct city name', () => {
    const cityName = 'New York';
    component.cityName = cityName;
    fixture.detectChanges();
    const cityNameElement = fixture.nativeElement.querySelector('h4');
    expect(cityNameElement.textContent).toContain(cityName.toUpperCase());
  });

  it('should display correct weather description', () => {
    const weather = 'Sunny';
    component.weather = weather;
    fixture.detectChanges();
    const weatherElement = fixture.nativeElement.querySelectorAll('p')[1];
    expect(weatherElement.textContent).toContain(weather);
  });
});
