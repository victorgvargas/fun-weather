import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'distance',
})
export class DistancePipe implements PipeTransform {
  transform(value: number): string {
    const distance = value / 1000;

    return `${distance} km`;
  }
}
