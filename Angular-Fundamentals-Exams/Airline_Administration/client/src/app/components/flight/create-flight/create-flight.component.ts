import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CreateFlight } from 'src/app/core/models/flight/create-flight.model';
import { FlightService } from 'src/app/core/services/flight.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-flight',
  templateUrl: './create-flight.component.html',
  styleUrls: ['./create-flight.component.scss']
})
export class CreateFlightComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private flight: FlightService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      destination: ['', Validators.required],
      origin: ['', Validators.required],
      departureDate: ['', Validators.required],
      departureTime: ['', Validators.required],
      seats: ['', [Validators.required, Validators.min(0)]],
      cost: ['', [Validators.required, Validators.min(0)]],
      image: ['', Validators.required],
      isPublished: ['true', Validators.required]
    });
  }

  get f() {
    return this.form.controls;
  }

  createFlight() {
    const payload: CreateFlight = this.form.value;
    payload['isPublished'] = payload['isPublished'].toString();

    this.flight.createFlight(payload).subscribe((json) => {
      if (!json['error']) {
        this.toastr.success('Created flight.');
        this.router.navigate(['/flight']);
      } else {
        this.toastr.error(json['error']);
      }
    });
  }

}
