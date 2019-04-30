import { EventState } from "../states/event.state";
import * as EventActions from '../actions/event.action';

const initialState: EventState = {
    allEvents: [],
    eventDetails: null,
    myEvents: []
};

function setEvents(state: EventState, payload) {
    return Object.assign({}, state, { 
        allEvents: payload
    });
}

function setEventDetails(state: EventState, payload) {
    return Object.assign({}, state, { 
        eventDetails: payload
    });
}

function setMyEvents(state: EventState, payload) {
    return Object.assign({}, state, { 
        myEvents: payload
    });
}

export function eventReducer(
    state: EventState = initialState,
    action: EventActions.Type
) {
    switch (action.type) {
        case EventActions.GET_ALL_EVENTS:
            return setEvents(state, action.payload);
        case EventActions.GET_MY_EVENTS:
            return setMyEvents(state, action.payload);
        case EventActions.DETAILS_EVENT:
        case EventActions.JOIN_EVENT:
            return setEventDetails(state, action.payload);
        default:
            return state;
    }
}
