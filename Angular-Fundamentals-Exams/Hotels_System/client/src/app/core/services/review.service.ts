import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReviewDetails } from '../contracts/review/Review-details';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.store';
import { CreateReview } from 'src/app/store/actions/review.action';

const BASE_URL = 'http://localhost:5000/hotels/';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  constructor(
    private http: HttpClient,
    private store: Store<AppState>
  ) { }

  getReviews(hotelId: string): Observable<ReviewDetails[]> {
    return this.http.get<ReviewDetails[]>(BASE_URL + `details/${hotelId}/reviews`);
  }

  createReview(hotelId: string, payload: ReviewDetails) {
    return this.http.post(BASE_URL + `details/${hotelId}/reviews/create`, payload)
      .pipe(tap(() => {
        this.store.dispatch(new CreateReview(payload));
      }));
  }
}
