import { Component, Input, OnInit } from '@angular/core';
import { CourseCard } from '../../ mock';
import { faCoffee, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  @Input() courses!: CourseCard[];
  @Input() isEditable!: boolean;
  faCoffee = faCoffee;
  faEdit = faEdit;
  faTrash = faTrash;
  constructor() {}

  ngOnInit(): void {}

  onNotify() {
    console.log('Show course button was clicked');
  }

  onEdit() {
    console.log('Edit button was clicked');
  }

  onDelete() {
    console.log('Delete button was clicked');
  }
}
