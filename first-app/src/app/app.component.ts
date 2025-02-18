import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./main-app/header/header.component";
import { FooterComponent } from './main-app/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink,HeaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {
 
}
