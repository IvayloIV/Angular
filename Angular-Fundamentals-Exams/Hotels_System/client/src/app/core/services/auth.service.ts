import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from 'src/app/core/contracts/auth/Register';
import { Login } from 'src/app/core/contracts/auth/Login';

const BASE_URL = 'http://localhost:5000/auth/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  register(body: Register) {
    return this.http.post<Register>(BASE_URL + 'signup', body);
  }

  login(body: Login) {
    return this.http.post<Login>(BASE_URL + 'login', body);
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
