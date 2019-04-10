import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HotelService } from '../services/hotel.service';
import { ReviewService } from '../services/review.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.store';
import { Observable, combineLatest } from 'rxjs';
import { GetHotelDetails } from 'src/app/store/actions/hotel.action';
import { GetReviewList } from 'src/app/store/actions/review.action';
import { tap, mapTo } from 'rxjs/operators';
import { DetailsHotel } from '../contracts/hotel/Details-hotel';
import { ReviewDetails } from '../contracts/review/Review-details';

@Injectable()
export class HotelDetailsResolver implements Resolve<boolean[]> {
    constructor(
        private hotelService: HotelService,
        private reviewService: ReviewService,
        private store: Store<AppState>
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean[]> {
        const id = route.params['id'];
        const hotelDetails = this.hotelService.getDetails(id)
            .pipe(tap((data: DetailsHotel) => {
                this.store.dispatch(new GetHotelDetails(data));
            }), mapTo(true));
        
        const reviews =  this.reviewService.getReviews(id)
            .pipe(tap((data: ReviewDetails[]) => {
                this.store.dispatch(new GetReviewList(data));
            }), mapTo(true));

        return combineLatest(hotelDetails, reviews);
    }
}
