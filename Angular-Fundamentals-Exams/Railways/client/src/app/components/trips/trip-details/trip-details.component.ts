import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.store';
import { TripService } from 'src/app/core/services/trip.service';
import { ActivatedRoute } from '@angular/router';
import { TripInfo } from 'src/app/core/contracts/trip/trip-info';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent implements OnInit {
  trip$: Observable<TripInfo>;

  constructor(
    private tripService: TripService,
    private store: Store<AppState>,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const { id } = this.route.snapshot.params;
    this.tripService.tripDetails(id)
      .subscribe(() => {
        this.trip$ = this.store.select(state => state.trip.tripDetails);
      });
  }

}
