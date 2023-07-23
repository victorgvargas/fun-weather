import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTempCardComponent } from './current-temp-card.component';

describe('CurrentTempCardComponent', () => {
  let component: CurrentTempCardComponent;
  let fixture: ComponentFixture<CurrentTempCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentTempCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentTempCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
