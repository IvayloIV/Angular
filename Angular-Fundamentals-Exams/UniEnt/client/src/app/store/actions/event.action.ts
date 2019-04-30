import { Action } from '@ngrx/store';
import { EventInfo } from 'src/app/core/models/event/event-info.model';
import { EventDetails } from 'src/app/core/models/event/event-details.model';

export const GET_ALL_EVENTS = '[EVENT] All';
export const DETAILS_EVENT = '[EVENT] Details';
export const GET_MY_EVENTS = '[EVENT] My';
export const JOIN_EVENT = '[EVENT] Join';

export class GetAllEvents implements Action {
    type: string = GET_ALL_EVENTS;
    constructor(public payload: EventInfo[]) {}
}

export class GetEventDetails implements Action {
    type: string = DETAILS_EVENT;
    constructor(public payload: EventDetails) {}
}

export class GetMyEvents implements Action {
    type: string = GET_MY_EVENTS;
    constructor(public payload: EventInfo[]) {}
}

export class JoinEvent implements Action {
    type: string = JOIN_EVENT;
    constructor(public payload: EventDetails) {}
}

export type Type = GetAllEvents | GetEventDetails | GetMyEvents | JoinEvent;
