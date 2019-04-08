import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PostInfo } from 'src/app/core/models/post-info';

@Component({
  selector: 'app-post-info',
  templateUrl: './post-info.component.html',
  styleUrls: ['./post-info.component.css']
})
export class PostInfoComponent {
  @Input() post: PostInfo;
  @Input() index: number;
  @Input() description: string;
  @Output() removePost = new EventEmitter<string>();

  isAuthor(post: Object) {
    return post['_acl']['creator'] === localStorage.getItem('userId');
  }

  deletePost(postId: string) {
    this.removePost.emit(postId);
  }
}
