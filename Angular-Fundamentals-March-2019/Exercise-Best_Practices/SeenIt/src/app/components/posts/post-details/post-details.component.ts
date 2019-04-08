import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PostService } from '../../../core/services/post.service';
import { CommentService } from '../../../core/services/comment.service';
import { CommentCreate } from 'src/app/core/models/coomment-create';
import { PostInfo } from 'src/app/core/models/post-info';
import { CommentInfo } from 'src/app/core/models/comment-info';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: PostInfo;
  comments$: Observable<CommentInfo[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService,
    private commentService: CommentService
  ) { }

  ngOnInit() {
    this.post = this.route.snapshot.data['post'];
    this.comments$ = this.commentService.getAllForPost(this.post['_id']);
  }

  loadComments() {
    this.comments$ = this.commentService.getAllForPost(this.post['_id']);
  }

  deleteComment(id: string) {
    this.commentService.deleteComment(id)
      .subscribe(() => {
        this.loadComments();
      })
  }

  postComment(body: CommentCreate) {
    body['postId'] = this.post['_id'];
    body['author'] = localStorage.getItem('username');

    this.commentService
      .postComment(body)
      .subscribe(() => {
        this.loadComments();
      })
  }

  deletePost(id: string) {
    this.postService.deletePost(id)
      .subscribe(() => {
        this.router.navigate(['/posts']);
      })
  }
}
