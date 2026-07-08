import { Routes } from '@angular/router';
import { HomeComponent } from './portfolio-website/home/home.component';
import { ContactComponent } from './portfolio-website/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
