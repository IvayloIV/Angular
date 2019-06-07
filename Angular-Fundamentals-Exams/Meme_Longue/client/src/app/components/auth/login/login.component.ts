import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Login } from 'src/app/core/models/auth/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private authService: AuthService) { }

  login(values: Login) {
    this.authService.login(values).subscribe();
  }
}
