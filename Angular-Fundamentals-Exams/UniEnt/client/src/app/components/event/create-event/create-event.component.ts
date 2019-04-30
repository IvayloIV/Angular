import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventService } from 'src/app/core/services/event.service';
import { ValidateUrl } from 'src/app/core/validations/validateUrl';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {
  form: FormGroup;
  
  constructor(
    private eventService: EventService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      dateTime: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]],
      imageURL: ['', [Validators.required, ValidateUrl]],
    });
  }

  get f() {
    return this.form.controls;
  }

  create() {
    const username = sessionStorage.getItem('username');
    const body = this.form.value;
    const payload = {
      name: body.name,
      dateTime: body.dateTime,
      description: body.description,
      imageURL: body.imageURL,
      peopleInterestedIn: 0,
      organizer: username,
    };

    this.eventService.createEvent(payload).subscribe(() => {
      this.toastr.success('Event created successfully.');
      this.router.navigate(['/event/all']);
    });
  }
}
