import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SignUpModel } from './models/signup.model';
import { SignInModel } from './models/signin.model';

const loginUrl = 'http://localhost:8000/auth/login';
const registerUrl = 'http://localhost:8000/auth/signup';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  register(body: SignUpModel): Observable<object> {
    return this.http.post<SignUpModel>(registerUrl, body);
  }

  login(body: SignInModel): Observable<object> {
    return this.http.post<SignInModel>(loginUrl, body);
  }

  logout(): void {
    localStorage.clear();
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('authToken') !== null;
  }

  isAdmin(): boolean {
    return localStorage.getItem('isAdmin') === 'true';
  }
}
