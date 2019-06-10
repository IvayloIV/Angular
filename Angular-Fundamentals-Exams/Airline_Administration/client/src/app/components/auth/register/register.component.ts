import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
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
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', Validators.required],
      repeatPass: ['', Validators.required]
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