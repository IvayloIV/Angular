import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { ValidateUrl } from 'src/app/core/validations/validateUrl';

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
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      repeatPass: ['', [Validators.required, Validators.minLength(3)]],
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      age: ['', [Validators.required, Validators.min(0)]],
      imageUrl: ['', [Validators.required, Validators.minLength(0), ValidateUrl]]
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
