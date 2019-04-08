import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TripService } from 'src/app/core/services/trip.service';
import { TripInfo } from 'src/app/core/contracts/trip/trip-info';
import { AppState } from 'src/app/store/app.store';
import { SearchTrips } from 'src/app/core/contracts/trip/search-trips';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trips-list',
  templateUrl: './trips-list.component.html',
  styleUrls: ['./trips-list.component.css']
})
export class TripsListComponent implements OnInit {
  trips$: Observable<TripInfo[]>;

  constructor(
    private tripService: TripService,
    private store: Store<AppState>,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const queryParams = this.route.snapshot.queryParams;

    if (Object.keys(queryParams).length === 3) {
      const body: SearchTrips = {
        destination: queryParams.destination,
        origin: queryParams.origin,
        date: queryParams.date,
      };
      
      this.tripService.searchTrips(body)
        .subscribe(() => this.trips$ = this.store.select(state => state.trip.tripsList));
    } else {
      this.tripService.getAllTrips()
        .subscribe(() => this.trips$ = this.store.select(state => state.trip.tripsList));
    }
  }

  searchTrips(body: SearchTrips) {
    this.tripService.searchTrips(body).subscribe();
  }

}
