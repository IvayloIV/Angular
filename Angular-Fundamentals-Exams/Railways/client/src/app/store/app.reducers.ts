import { tripReducer } from './reducers/trip.reducer';
import { cartReducer } from './reducers/cart.reducer';

export const appReducers = {
    trip: tripReducer,
    cart: cartReducer
};