import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TripService } from 'src/app/core/services/trip.service';
import { AppState } from 'src/app/store/app.store';
import { MyTrip } from 'src/app/core/contracts/trip/my-tips';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-trips',
  templateUrl: './my-trips.component.html',
  styleUrls: ['./my-trips.component.css']
})
export class MyTripsComponent implements OnInit {
  trips$: Observable<MyTrip[]>;

  constructor(
    private tripService: TripService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.tripService.getMyTrips()
      .subscribe(() => this.trips$ = this.store.select(state => state.trip.myTrips))
  }

}
