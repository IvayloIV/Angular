import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from '../models/auth/register.model';
import { Login } from '../models/auth/login.model';

const BASE_URL = 'https://baas.kinvey.com/';
const APP_KEY = 'kid_Skk9OGJi4';
const REGISTER_URL = BASE_URL + 'user/' + APP_KEY;
const LOGIN_URL = BASE_URL + 'user/' + APP_KEY + '/login';
const LOGOUT_URL = BASE_URL + 'user/' + APP_KEY + '/_logout';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  register(body: Register) {
    return this.http.post<Register>(REGISTER_URL, JSON.stringify(body));
  }

  login(body: Login) {
    return this.http.post<Login>(LOGIN_URL, JSON.stringify(body));
  }
  
  logout() {
    return this.http.post(LOGOUT_URL, {});
  }

  getUsername() {
    return sessionStorage.getItem('username');
  }

  isAuthenticated(): boolean {
    return sessionStorage.getItem('authToken') !== null;
  }
}
