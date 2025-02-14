import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './components/about/about.component';
//lazy loading me we give imports in the code only,no need to specify here
export const routes: Routes = [
    // {path:'',component:HomeComponent},
    // {path:'about/:id',component:AboutComponent}

    {
        path:'',
        loadComponent:()=>import('./home/home.component').then((c)=>c.HomeComponent)
    },
    {
        path:'about/:id',
        loadComponent:()=>import('./components/about/about.component').then((c)=>c.AboutComponent)
    },

];
