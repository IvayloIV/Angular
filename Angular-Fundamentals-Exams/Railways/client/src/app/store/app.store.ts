import { TripState } from './state/trip.state';
import { CartState } from './state/cart.state';

export interface AppState {
    trip: TripState;
    cart: CartState;
}