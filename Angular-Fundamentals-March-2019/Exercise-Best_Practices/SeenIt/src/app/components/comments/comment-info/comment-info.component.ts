import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommentInfo } from 'src/app/core/models/comment-info';

@Component({
  selector: 'app-comment-info',
  templateUrl: './comment-info.component.html',
  styleUrls: ['./comment-info.component.css']
})
export class CommentInfoComponent {
  @Input() commentInfo: CommentInfo;
  @Output() removeComment = new EventEmitter<string>();

  isAuthor() {
    return this.commentInfo['_acl']['creator'] === localStorage.getItem('userId');
  }

  deleteComment(id: string) {
    this.removeComment.emit(id);
  }
}
