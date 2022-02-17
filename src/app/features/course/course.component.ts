import { Component, Input, OnInit } from '@angular/core';
import { CourseCard } from '../../interface/courses-interface';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  @Input() courseCard!: CourseCard;
  

  constructor() {}

  ngOnInit(): void {}
}
