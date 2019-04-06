import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]],
      repeatPass: ['', [Validators.required, Validators.minLength(4)]]
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
