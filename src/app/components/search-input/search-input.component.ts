import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputComponent {
  form = this._fb.group({
    search: [''],
  });
  @Output() searchQuery = new EventEmitter<string>();

  constructor(private _fb: FormBuilder) {}

  handleKeyUp(key: KeyboardEvent) {
    if (key.key === 'enter') {
      this.submit();
    }
  }

  submit() {
    const query = this.form.get('search')?.value;

    if (query) this.searchQuery.emit(query);
  }
}
