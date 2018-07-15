import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home/home.component';

export const routes: Routes = [{
  path: 'home',
  loadChildren: '../home/home.module#HomeModule'
},
{
  path: 'forms',
  loadChildren: '../forms/forms.module#FormsModule'
},
{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}
];
