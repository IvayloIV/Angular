import { AppState } from '../app.state';

export const allEvents = (state: AppState) => state.event.allEvents;
export const eventDetails = (state: AppState) => state.event.eventDetails;
export const myEvents = (state: AppState) => state.event.myEvents;
