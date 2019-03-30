import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private route: Router
  ) { }

  ngOnInit() {
  }

  singIn(form: NgForm) {
    const value = form.value;
    this.authService.signIn(value.email, value.password)
      .then(() => {
        return this.authService.getToken()
      })
      .then((token) => {
        localStorage.setItem('authToken', token);
        this.toastr.success('Login successful.');
        this.route.navigate(['/recipes/list']);
      })
      .catch(err => this.toastr.error(err.message));
  }
}
