import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CoursesComponent } from '../courses/courses.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink,CoursesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  courses:any[]=[];
}
