import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ReviewCreateComponent } from './review-create/review-create.component';
import { ReviewListComponent } from './review-list/review-list.component';

@NgModule({
  declarations: [
    ReviewCreateComponent,
    ReviewListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ReviewCreateComponent,
    ReviewListComponent
  ]
})
export class ReviewModule { }
