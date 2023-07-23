import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time',
})
export class TimePipe implements PipeTransform {
  transform(value: number): string {
    const date = new Date(value * 1000);
    const hours = date.getHours();
    const minutes = '' + date.getMinutes();

    return hours + ':' + minutes.substring(-2);
  }
}
