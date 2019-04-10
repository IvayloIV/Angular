import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.store';
import { Observable } from 'rxjs';
import { DetailsHotel } from 'src/app/core/contracts/hotel/Details-hotel';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {
  hotelDetails$: Observable<DetailsHotel>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.hotelDetails$ = this.store.select(state => state.hotel.hotelDetails);
  }

}
