import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({ //decorator function
  selector: 'courses', // <div class="courses"> ".courses" for and id #courses
  template: `
    <h2>{{ getTitle() }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
  `
})
export class CoursesComponent {
  title = "List of courses";
  courses;

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  getTitle() {
    return this.title;
  }
}
