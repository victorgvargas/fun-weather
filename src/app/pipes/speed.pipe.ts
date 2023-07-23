import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'speed',
})
export class SpeedPipe implements PipeTransform {
  transform(value: number): string {
    const kmH = (value * 3.6).toPrecision(2);

    return `${kmH} km/h`;
  }
}
