import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CoursesComponent } from '../courses/courses.component';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  imports: [RouterLink,CoursesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  courses: any[] = [
    {
      title: 'Introduction to Angular',
      description: 'Learn the basics of Angular, a powerful framework for building web applications.',
      // image: 'https://via.placeholder.com/150/FF5733/FFFFFF?text=Angular'
    },
    {
      title: 'Advanced JavaScript',
      description: 'Deep dive into JavaScript concepts and features for modern web development.',
      // image: 'https://via.placeholder.com/150/33FF57/FFFFFF?text=JavaScript'
    },
    {
      title: 'Web Development Bootcamp',
      description: 'A comprehensive bootcamp covering HTML, CSS, JavaScript, and more.',
      // image: 'https://via.placeholder.com/150/3357FF/FFFFFF?text=Web+Dev'
    },
    {
      title: 'React for Beginners',
      description: 'Get started with React, a popular library for building user interfaces.',
      // image: 'https://via.placeholder.com/150/FF33A1/FFFFFF?text=React'
    },
    {
      title: 'Understanding REST APIs',
      description: 'Learn how to design and consume RESTful APIs in your applications.',
      // image: 'https://via.placeholder.com/150/FFD733/FFFFFF?text=REST+API'
    }
  ];
  
}
