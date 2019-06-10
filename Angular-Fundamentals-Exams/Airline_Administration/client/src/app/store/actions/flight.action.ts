import { Action } from '@ngrx/store';
import { FlightInfo } from 'src/app/core/models/flight/flight-info.model';
import { FlightDetails } from 'src/app/core/models/flight/flight-details.model';

export const GET_PUBLISHED_FLIGHTS = '[FLIGHT] Published';
export const GET_FLIGHT_DETAILS = '[FLIGHT] Details';
export const GET_MY_FLIGHTS = '[FLIGHT] My';
export const REMOVE_FLIGHT = '[FLIGHT] Remove';

export class GetPublishedFlights implements Action {
    type: string = GET_PUBLISHED_FLIGHTS;
    constructor(public payload: FlightInfo[]) {}
}

export class GetFlightDetails implements Action {
    type: string = GET_FLIGHT_DETAILS;
    constructor(public payload: FlightDetails) {}
}

export class GetMyFlights implements Action {
    type: string = GET_MY_FLIGHTS;
    constructor(public payload: FlightDetails[]) {}
}

export class RemoveFlight implements Action {
    type: string = REMOVE_FLIGHT;
    constructor(public payload: string) {}
}

export type Type = GetPublishedFlights | GetFlightDetails | GetMyFlights | RemoveFlight;
