import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('registerForm') registerForm: NgForm;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }


  signUp() {
    this.authService.register(this.registerForm.value).subscribe();
  }

}
