import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';

import { FlightDetails } from 'src/app/core/models/flight/flight-details.model';
import { flightDetails } from 'src/app/store/selectors/flight.selector';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.scss']
})
export class FlightDetailsComponent implements OnInit {
  flight$: Observable<FlightDetails>;
  userId: string;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.flight$ = this.store.select(flightDetails);
    this.userId = sessionStorage.getItem('userId');
  }

}
