import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APP_KEY } from '../../kinvey.tokens';
import { PostInfo } from '../models/post-info';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly BASE_URL = `https://baas.kinvey.com/appdata/${APP_KEY}`;
  private readonly ALL_POSTS = `${this.BASE_URL}/posts?query={}&sort={"_kmd.ect": -1}`;
  private readonly CREATE_POST = `${this.BASE_URL}/posts`;

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<PostInfo[]> {
    return this.http.get<PostInfo[]>(this.ALL_POSTS);
  }

  createPost(body: PostInfo) {
    return this.http.post(this.CREATE_POST, body);
  }

  getDetails(id: string): Observable<PostInfo> {
    return this.http.get<PostInfo>(this.CREATE_POST + `/${id}`);
  }

  editPost(body: PostInfo, id: string) {
    return this.http.put(this.CREATE_POST + `/${id}`, body);
  }

  deletePost(id: string) {
    return this.http.delete(this.CREATE_POST + `/${id}`);
  }

  getUserPosts(): Observable<PostInfo[]>  {
    return this.http
      .get<PostInfo[]>(`${this.BASE_URL}/posts?query={"author":"${localStorage.getItem('username')}"}&sort={"_kmd.ect": -1}`);
  }
}