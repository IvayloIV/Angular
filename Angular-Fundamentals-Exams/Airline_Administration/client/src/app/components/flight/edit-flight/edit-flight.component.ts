import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { AppState } from 'src/app/store/app.state';

import { CreateFlight } from 'src/app/core/models/flight/create-flight.model';
import { FlightService } from 'src/app/core/services/flight.service';
import { flightDetails } from 'src/app/store/selectors/flight.selector';

@Component({
  selector: 'app-edit-flight',
  templateUrl: './edit-flight.component.html',
  styleUrls: ['./edit-flight.component.scss']
})
export class EditFlightComponent implements OnInit, OnDestroy {
  form: FormGroup;
  sub: Subscription;

  constructor(
    private fb: FormBuilder,
    private flight: FlightService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.sub = this.store.select(flightDetails).subscribe((data) => {
      let isPublished = data.isPublished === 'true';
      this.form = this.fb.group({
        destination: [data.destination, Validators.required],
        origin: [data.origin, Validators.required],
        departureDate: [data.departureDate, Validators.required],
        departureTime: [data.departureTime, Validators.required],
        seats: [data.seats, [Validators.required, Validators.min(0)]],
        cost: [data.cost, [Validators.required, Validators.min(0)]],
        image: [data.image, Validators.required],
        isPublished: [isPublished, Validators.required]
      });
    });
  }

  get f() {
    return this.form.controls;
  }

  editFlight() {
    const payload: CreateFlight = this.form.value;
    payload['isPublished'] = payload['isPublished'].toString();

    const id = this.route.snapshot.params['id'];
    this.flight.editFlight(id, payload).subscribe((json) => {
      if (!json['error']) {
        this.toastr.success('Edit flight.');
        this.router.navigate([`/flight/details/${id}`]);
      } else {
        this.toastr.error(json['error']);
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
