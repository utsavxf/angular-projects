import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
//lazy loading me we give imports in the code only,no need to specify here
export const routes: Routes = [
    // {path:'',component:HomeComponent},
    // {path:'about/:id',component:AboutComponent}

    {
        path:'',
        loadComponent:()=>import('./pages/home/home.component').then((c)=>c.HomeComponent)
    },
    {
        path:'about',
        loadComponent:()=>import('./pages/about/about.component').then((c)=>c.AboutComponent)
    },
    {
        path:'admin',
        loadComponent:()=>import('./pages/admin/admin.component').then((c)=>c.AdminComponent)
    },

];
