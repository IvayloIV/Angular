import { Component } from '@angular/core';
import { Login } from 'src/app/core/models/auth/login.model';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private authService: AuthService
  ) { }

  login(payload: Login) {
    this.authService.login(payload).subscribe();
  } 
}