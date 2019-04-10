import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.store';
import { DetailsHotel } from 'src/app/core/contracts/hotel/Details-hotel';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { HotelService } from 'src/app/core/services/hotel.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  hotels$: Observable<DetailsHotel[]>;
  page: number = 1;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    public authService: AuthService,
    private hotelService: HotelService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((query) => {
      this.page = Number(query.page) || 1;
      this.hotelService.getAllHotels(this.page)
        .subscribe(() => {
          this.hotels$ = this.store.select(state => state.hotel.hotelList);
        });
    });
  }

  get lastPage() {
    return this.page - 1;
  }

  get nextPage() {
    return this.page + 1;
  }

}
