import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  err: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  register(value) {
    delete value['confirmPassword'];
    this.authService.register(value)
      .subscribe(data => {
        this.router.navigate(['/'])
      },
      err => this.err = err.error.description);
  }
}
