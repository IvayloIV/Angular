import { Action } from '@ngrx/store';
import { DetailsHotel } from 'src/app/core/contracts/hotel/Details-hotel';

export const GET_HOTEL_LIST = '[HOTEL] Get all';
export const GET_HOTEL_DETAILS = '[HOTEL] Details';

export class GetHotelList implements Action {
    type: string = GET_HOTEL_LIST;
    constructor(public payload: DetailsHotel[]) {}
}

export class GetHotelDetails implements Action {
    type: string = GET_HOTEL_DETAILS;
    constructor(public payload: DetailsHotel) {}
}

export type Type = GetHotelList | GetHotelDetails;