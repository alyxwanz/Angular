import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creationDate',
})
export class CreationDatePipe extends DatePipe implements PipeTransform {
  transform(date: any, args?: any): any {
    return super.transform(date, "d.MM.yyyy");
  }
}
