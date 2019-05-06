import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Login } from 'src/app/core/models/auth/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  get f() {
    return this.form.controls;
  }

  login() {
    const payload: Login = this.form.value;
    this.authService.login(payload).subscribe();
  }
}
