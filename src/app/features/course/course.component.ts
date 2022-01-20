import { Component, Input, OnInit } from '@angular/core';
import { CourseCard } from '../../ mock';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  @Input() courseCard!: CourseCard;

  constructor() {}

  ngOnInit(): void {}

  transformDuration(durationNumber: number): string {
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
