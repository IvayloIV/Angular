import { HotelState } from './state/hotel.state';
import { ReviewState } from './state/review.state';

export interface AppState {
    hotel: HotelState;
    review: ReviewState;
}