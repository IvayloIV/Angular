import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormService } from '../services/form.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  @ViewChild('form') form: NgForm;
  phones: Observable<string[]>;
  types: Observable<string[]>;

  constructor(private formService: FormService) { }

  ngOnInit() {
    this.phones = this.formService.getPhones();
    this.types = this.formService.getTypes();
  }

  register() {
    this.form.control.reset();
  }

}
