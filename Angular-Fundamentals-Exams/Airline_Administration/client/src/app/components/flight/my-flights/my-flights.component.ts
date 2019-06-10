import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { FlightDetails } from 'src/app/core/models/flight/flight-details.model';
import { myFlights } from 'src/app/store/selectors/flight.selector';
import { FlightService } from 'src/app/core/services/flight.service';

@Component({
  selector: 'app-my-flights',
  templateUrl: './my-flights.component.html',
  styleUrls: ['./my-flights.component.scss']
})
export class MyFlightsComponent implements OnInit {
  flights$: Observable<FlightDetails[]>;

  constructor(
    private store: Store<AppState>,
    private flightService: FlightService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.flights$ = this.store.select(myFlights);
  }

  removeFlight(flightId: string) {
    return this.flightService.removeFlight(flightId)
      .subscribe(() => {
        this.toastr.success('Flight deleted.');
      });
  }

}
