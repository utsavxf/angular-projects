import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  name='Utsav'

  constructor(){
   console.log('first constructor will be called then OnInit will be called')
  }
 
  ngOnInit(){
   // this.changeName()
  }
 
  changeName(){
    if(this.name=='Utsav')
     this.name='Parth';
   else
     this.name='Utsav';
  }
}
