import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(/^[A-Za-z]{3,}$/)]],
      password: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9]{6,}$/)]],
      repeatPass: ['', Validators.required],
      email: ['', Validators.required],
      avatarUrl: ['', Validators.required]
    });
  }

  get f() {
    return this.form.controls;
  }

  register() {
    const payload = this.form.value;
    delete payload.repeatPass;
    this.authService.register(payload).subscribe();
  }
}
