import { Component, Input } from '@angular/core';
import { faCoffee, faEdit, faTrash} from '@fortawesome/free-solid-svg-icons';
import { COURSE_LIST } from './ mock';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courseList = COURSE_LIST;
  title = 'courses-app';
  faCoffee = faCoffee;
  faEdit = faEdit;
  faTrash = faTrash;
}
