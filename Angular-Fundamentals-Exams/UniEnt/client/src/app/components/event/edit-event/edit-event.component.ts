import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventService } from 'src/app/core/services/event.service';
import { ValidateUrl } from 'src/app/core/validations/validateUrl';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { eventDetails } from 'src/app/store/selectors/event.selector';
import { EventDetails } from 'src/app/core/models/event/event-details.model';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent implements OnInit {
  form: FormGroup;
  organizer: string;
  peopleInterestedIn: number;
  
  constructor(
    private store: Store<AppState>,
    private eventService: EventService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.store.select(eventDetails).subscribe((data: EventDetails) => {
      this.buildForm(data);
    })
  }

  buildForm(data: EventDetails) {
    this.organizer = data.organizer;
    this.peopleInterestedIn = data.peopleInterestedIn;

    this.form = this.fb.group({
      name: [data.name, [Validators.required, Validators.minLength(6)]],
      dateTime: [data.dateTime, Validators.required],
      description: [data.description, [Validators.required, Validators.minLength(10)]],
      imageURL: [data.imageURL, [Validators.required, ValidateUrl]],
    });
  }

  get f() {
    return this.form.controls;
  }

  edit() {
    const id = this.route.snapshot.params['id'];
    const body = this.form.value;
    const payload = {
      name: body.name,
      dateTime: body.dateTime,
      description: body.description,
      imageURL: body.imageURL,
      peopleInterestedIn: this.peopleInterestedIn,
      organizer: this.organizer,
    };

    this.eventService.editEvent(id, payload).subscribe(() => {
      this.toastr.success('Event edited successfully.');
      this.router.navigate([`event/details/${id}`]);
    });
  }

}
