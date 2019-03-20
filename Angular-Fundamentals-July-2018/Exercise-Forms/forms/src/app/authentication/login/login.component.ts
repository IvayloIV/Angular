import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  err: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(value) {
    this.authService.login(value)
      .subscribe(data => {
        this.authService.authtoken = data['_kmd'].authtoken;
        localStorage.setItem('authtoken', data['_kmd'].authtoken);
        localStorage.setItem('username', data['username']);
        this.router.navigate(['/'])
      },
      err => this.err = err.error.description);
  }
}
