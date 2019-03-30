import { Component, OnInit } from '@angular/core';
import { FormService } from '../services/form.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ValidateUrl } from '../validate-url';

@Component({
  selector: 'app-register-form-reactive',
  templateUrl: './register-form-reactive.component.html',
  styleUrls: ['./register-form-reactive.component.css']
})
export class RegisterFormReactiveComponent implements OnInit {
  form: FormGroup;
  phones: Observable<string[]>;
  types: Observable<string[]>;

  constructor(
    private formService: FormService,
    private builder: FormBuilder
  ) { }

  ngOnInit() {
    this.phones = this.formService.getPhones();
    this.types = this.formService.getTypes();

    this.form = this.builder.group({
      fullName: new FormControl('', [Validators.required, Validators.pattern("[A-Z][A-Za-z]+\\s[A-Z][A-Za-z]+")]),
      email: new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}")]),
      phoneStart: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern("\\d{9}")]),
      type: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.pattern("[A-Za-z0-9]{3,16}")]),
      repeatPass: new FormControl('', [Validators.required, Validators.pattern("[A-Za-z0-9]{3,16}")]),
      imageUrl: new FormControl('', [Validators.required, ValidateUrl])
    });
  }

  get f(): object {
    return this.form.controls;
  }

  register() {
    this.form.reset();
  }

}
