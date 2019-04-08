import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { TripInfo } from '../contracts/trip/trip-info';
import { tap } from 'rxjs/operators';
import { AppState } from 'src/app/store/app.store';

import { GetAllTrips, SearchForTrips, DetailsTrip, GetMyTrips } from 'src/app/store/actions/trip.action';
import { SearchTrips } from '../contracts/trip/search-trips';
import { MyTrip } from '../contracts/trip/my-tips';

const BASE_URL = 'http://localhost:5000/';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  constructor(
    private http: HttpClient,
    private store: Store<AppState>
  ) { }

  getAllTrips() {
      return this.http.get<TripInfo[]>(BASE_URL + 'trips')
        .pipe(tap((data: TripInfo[]) => {
          this.store.dispatch(new GetAllTrips(data));
        }));
  }

  searchTrips({ destination, origin, date }: SearchTrips) {
    return this.http.get<TripInfo[]>(BASE_URL + `search?origin=${origin}&destination=${destination}&date=${date}`)
        .pipe(tap((data: TripInfo[]) => {
          this.store.dispatch(new SearchForTrips(data));
        }));
  }

  tripDetails(id: string) {
    return this.http.get<TripInfo>(BASE_URL + `trips/${id}`)
        .pipe(tap((data: TripInfo) => {
          this.store.dispatch(new DetailsTrip(data));
        }));
  }

  getMyTrips() {
    return this.http.get<MyTrip[]>(BASE_URL + `cart/history`)
        .pipe(tap((data: MyTrip[]) => {
          this.store.dispatch(new GetMyTrips(data));
        }));
  }
}
