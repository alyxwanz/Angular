import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStoreService } from 'src/app/user/services/user-store.service';
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
