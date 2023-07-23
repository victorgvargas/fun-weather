import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uvi',
})
export class UviPipe implements PipeTransform {
  transform(value: number): string {
    if (value < 3) return `${value} (Low)`;
    if (value >= 3 && value < 6) return `${value} (Moderate)`;
    if (value >= 6 && value < 8) return `${value} (High)`;
    if (value >= 8 && value < 11) return `${value} (Very high)`;
    else return `${value} (Extreme)`;
  }
}
