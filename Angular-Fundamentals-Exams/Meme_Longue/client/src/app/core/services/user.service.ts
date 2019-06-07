import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDetails } from '../models/user/user-details.model';

const APP_KEY = 'kid_SkuSX2vDm';
const BASE_URL_USER = `https://baas.kinvey.com/user/${APP_KEY}/`;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getUserDetails(userId: string): Observable<UserDetails> {
    return this.http.get<UserDetails>(BASE_URL_USER + userId);
  }

  removeUser(userId: string) {
    return this.http.delete(BASE_URL_USER + userId);
  }
}
