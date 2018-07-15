import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms/forms.component';
import { RouterModule } from '@angular/router';
import { routes } from './forms.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FormsComponent]
})
export class FormsModule { }
