import { Component, inject, Input } from '@angular/core';
import { CourseService } from '../../services/course/course.service';
import { BehaviorSubject } from 'rxjs';
import { Course } from '../../interfaces/course.interface';

@Component({
  selector: 'app-courses',
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
@Input() course:any;

//  private courses$=new BehaviorSubject<Course>([])

 constructor(private courseService:CourseService){}
 private courseService2=inject(CourseService)

}
