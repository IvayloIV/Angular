import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from '../models/auth/register.model';
import { Login } from '../models/auth/login.model';

const BASE_URL = 'http://localhost:5000/user/';
const REGISTER_URL = BASE_URL + 'register';
const LOGIN_URL = BASE_URL + 'login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  register(body: Register) {
    return this.http.post<Register>(REGISTER_URL, body);
  }

  login(body: Login) {
    return this.http.post<Login>(LOGIN_URL, body);
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
