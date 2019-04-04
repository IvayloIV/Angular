import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private route: Router
  ) { }

  ngOnInit() {
  }

  signUp(form: NgForm) {
    const value = form.value;
    this.authService.signUp(value.email, value.password)
      .then(() => {
        this.toastr.success('Register successful.');
        this.route.navigate(['/auth/signin']);
      })
      .catch(e => this.toastr.error(e.message));
  }
}
