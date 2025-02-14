import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig) //ye line AppComponent ko puri application ka root component bana deta hai
  .catch((err) => console.error(err));
