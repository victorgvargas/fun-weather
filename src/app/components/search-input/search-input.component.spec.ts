import {
  ComponentFixture,
  TestBed,
  tick,
  fakeAsync,
} from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchInputComponent } from './search-input.component';

describe('SearchInputComponent', () => {
  let component: SearchInputComponent;
  let fixture: ComponentFixture<SearchInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [SearchInputComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit search query when submitting the form', () => {
    const query = 'test search';
    const spy = spyOn(component.searchQuery, 'emit');

    const inputElement = fixture.nativeElement.querySelector('input');
    const formElement = fixture.nativeElement.querySelector('form');

    inputElement.value = query;
    inputElement.dispatchEvent(new Event('input'));

    formElement.dispatchEvent(new Event('submit'));
    fixture.detectChanges();

    expect(spy).toHaveBeenCalledWith(query);
  });

  it('should not emit search query if the form is submitted with an empty search input', () => {
    const spy = spyOn(component.searchQuery, 'emit');

    const formElement = fixture.nativeElement.querySelector('form');

    formElement.dispatchEvent(new Event('submit'));
    fixture.detectChanges();

    expect(spy).not.toHaveBeenCalled();
  });

  it('should not emit search query if the form is submitted by pressing enter with an empty search input', fakeAsync(() => {
    const spy = spyOn(component.searchQuery, 'emit');

    const inputElement = fixture.nativeElement.querySelector('input');

    const enterKeyEvent = new KeyboardEvent('keyup', { key: 'Enter' });
    inputElement.dispatchEvent(enterKeyEvent);
    tick();
    fixture.detectChanges();

    expect(spy).not.toHaveBeenCalled();
  }));
});
