import { AppState } from '../app.state';

export const publishedFlights = (state: AppState) => state.flight.publishFlights;
export const flightDetails = (state: AppState) => state.flight.flightDetails;
export const myFlights = (state: AppState) => state.flight.myFlights;
