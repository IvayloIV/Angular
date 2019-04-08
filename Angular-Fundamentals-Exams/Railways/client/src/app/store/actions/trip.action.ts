import { Action } from '@ngrx/store';
import { TripInfo } from 'src/app/core/contracts/trip/trip-info';
import { MyTrip } from 'src/app/core/contracts/trip/my-tips';

export const GET_ALL_TRIPS = '[TRIP] Get all';
export const SEARCH_TRIPS = '[TRIP] Search';
export const TRIP_DETAILS = '[TRIP] Details';
export const MY_TRIPS = '[TRIP] My trips';

export class GetAllTrips implements Action {
    type: string = GET_ALL_TRIPS;
    constructor(public payload: TripInfo[]) {}
}

export class SearchForTrips implements Action {
    type: string = SEARCH_TRIPS;
    constructor(public payload: TripInfo[]) {}
}

export class DetailsTrip implements Action {
    type: string = TRIP_DETAILS;
    constructor(public payload: TripInfo) {}
}

export class GetMyTrips implements Action {
    type: string = MY_TRIPS;
    constructor(public payload: MyTrip[]) {}
}

export type Type = GetAllTrips | SearchForTrips | DetailsTrip | GetMyTrips;