import { FlightState } from "../states/flight.state";
import * as FlightAction from '../actions/flight.action';

const initialState: FlightState = {
    publishFlights: [],
    flightDetails: null,
    myFlights: []
};

function setPublishedFlights(state: FlightState, payload) {
    return Object.assign({}, state, { 
        publishFlights: payload
    });
}

function setFlightDetails(state: FlightState, payload) {
    return Object.assign({}, state, { 
        flightDetails: payload
    });
}

function setMyFlights(state: FlightState, payload) {
    return Object.assign({}, state, { 
        myFlights: payload
    });
}

function removeFlight(state: FlightState, payload) {
    return Object.assign({}, state, { 
        myFlights: state.myFlights.filter(a => a._id !== payload)
    });
}

export function flightReducer(
    state: FlightState = initialState,
    action: FlightAction.Type
) {
    switch (action.type) {
        case FlightAction.GET_PUBLISHED_FLIGHTS:
            return setPublishedFlights(state, action.payload);
        case FlightAction.GET_FLIGHT_DETAILS:
            return setFlightDetails(state, action.payload);
        case FlightAction.GET_MY_FLIGHTS:
            return setMyFlights(state, action.payload);
        case FlightAction.REMOVE_FLIGHT:
            return removeFlight(state, action.payload);
        default:
            return state;
    }
}
