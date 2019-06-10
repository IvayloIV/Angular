import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FlightInfo } from 'src/app/core/models/flight/flight-info.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { publishedFlights } from 'src/app/store/selectors/flight.selector';

@Component({
  selector: 'app-all-flights',
  templateUrl: './all-flights.component.html',
  styleUrls: ['./all-flights.component.scss']
})
export class AllFlightsComponent implements OnInit {
  flights$: Observable<FlightInfo[]>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.flights$ = this.store.select(publishedFlights);
  }

}
