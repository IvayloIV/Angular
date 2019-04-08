import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommentCreateComponent } from './comment-create/comment-create.component';
import { CommentInfoComponent } from './comment-info/comment-info.component';

@NgModule({
  declarations: [
    CommentCreateComponent,
    CommentInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommentCreateComponent,
    CommentInfoComponent
  ]
})
export class CommentsModule { }
