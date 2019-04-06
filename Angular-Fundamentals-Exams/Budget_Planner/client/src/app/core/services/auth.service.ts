import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRegister } from 'src/app/core/contracts/auth/IRegister';
import { ILogin } from 'src/app/core/contracts/auth/ILogin';

const BASE_URL = 'http://localhost:5000/auth/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  register(body: IRegister) {
    return this.http.post<IRegister>(BASE_URL + 'signup', body);
  }

  login(body: ILogin) {
    return this.http.post<ILogin>(BASE_URL + 'login', body);
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
