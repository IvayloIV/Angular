import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_KEY } from '../../kinvey.tokens';
import { CommentCreate } from '../models/coomment-create';
import { CommentInfo } from '../models/comment-info';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private readonly BASE_URL = `https://baas.kinvey.com/appdata/${APP_KEY}`;
  private readonly CREATE_COMMENT = `${this.BASE_URL}/comments`;

  constructor(
    private http: HttpClient
  ) { }

  getAllForPost(postId: string) {
    return this.http.get<CommentInfo[]>(`${this.CREATE_COMMENT}?query={"postId":"${postId}"}&sort={"_kmd.ect": -1}`);
  }

  postComment(body: CommentCreate) {
    return this.http.post(this.CREATE_COMMENT, body);
  }

  deleteComment(id: string) {
    return this.http.delete(`${this.CREATE_COMMENT}/${id}`);
  }
}