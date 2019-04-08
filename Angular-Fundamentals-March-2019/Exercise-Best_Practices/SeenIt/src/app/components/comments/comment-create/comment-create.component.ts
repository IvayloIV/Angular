import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommentCreate } from 'src/app/core/models/coomment-create';

@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.css']
})
export class CommentCreateComponent {
  @ViewChild('f') createCommentForm: NgForm;
  @Output() createComment = new EventEmitter<CommentCreate>();

  postComment() {
    const body: CommentCreate = this.createCommentForm.value;
    this.createCommentForm.reset();
    this.createComment.emit(body);
  }

}
