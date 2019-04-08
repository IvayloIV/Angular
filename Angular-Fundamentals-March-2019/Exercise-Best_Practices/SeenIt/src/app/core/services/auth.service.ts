import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_KEY } from '../../kinvey.tokens';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly BASE_URL = `https://baas.kinvey.com/user/${APP_KEY}`;

  constructor(
    private http: HttpClient
  ) { }


  get token() {
    return localStorage.getItem('token');
  }

  signUp(body: Object) {
    return this.http.post(this.BASE_URL, body);
  }

  signIn(body: Object) {
    return this.http.post(`${this.BASE_URL}/login`, body);
  }

  logout() {
    return this.http.post(`${this.BASE_URL}/_logout`, {});
  }

  isAuthenticated() {
    return this.token !== null;
  }
}
