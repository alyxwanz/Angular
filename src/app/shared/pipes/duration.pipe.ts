import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  
  transform(durationNumber: number): string {
    const hours = durationNumber / 60;
    const rhours = Math.floor(hours);
    const minutes = (hours - rhours) * 60;
    const rminutes = Math.round(minutes);

    const formatNumber = (value: number): string =>
      value < 9 ? `0${value}` : `${value}`;

    const minutesStr = formatNumber(rminutes);
    const hoursStr = formatNumber(rhours);

    return `${hoursStr}:${minutesStr} hours`;
  }
}
