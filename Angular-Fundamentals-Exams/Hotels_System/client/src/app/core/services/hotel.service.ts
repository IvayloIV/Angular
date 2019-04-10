import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateHotel } from '../contracts/hotel/Create-hotel';
import { DetailsHotel } from '../contracts/hotel/Details-hotel';
import { tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.store';
import { GetHotelList } from 'src/app/store/actions/hotel.action';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:5000/hotels/';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  constructor(
    private http: HttpClient,
    private store: Store<AppState>
  ) { }

  createHotel(payload: CreateHotel) {
    return this.http.post(BASE_URL + 'create', payload);
  }

  getAllHotels(page) {
    return this.http.get<DetailsHotel[]>(BASE_URL + `all?page=${page}`)
      .pipe(tap((data: DetailsHotel[]) => {
        this.store.dispatch(new GetHotelList(data));
      }));
  }

  getDetails(hotelId: string): Observable<DetailsHotel> {
    return this.http.get<DetailsHotel>(BASE_URL + `details/${hotelId}`);
  }
}
