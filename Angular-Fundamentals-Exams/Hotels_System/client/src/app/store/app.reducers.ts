import { hotelReducer } from './reducers/hotel.reducer';
import { reviewReducer } from './reducers/review.reducer';

export const appReducers = {
    hotel: hotelReducer,
    review: reviewReducer
};
