import { TripState } from "../state/trip.state";
import * as TripAction from '../actions/trip.action';

const initialState: TripState = {
    tripsList: [],
    tripDetails: null,
    myTrips: []
};

function setTripsList(state: TripState, payload) {
    return Object.assign({}, state, {
        tripsList: payload
    });
}

function tripDetails(state: TripState, payload) {
    return Object.assign({}, state, {
        tripDetails: payload
    });
}

function setMyTrips(state: TripState, payload) {
    return Object.assign({}, state, {
        myTrips: payload
    });
}

export function tripReducer(
    state: TripState = initialState,
    action: TripAction.Type
) {
    switch (action.type) {
        case TripAction.GET_ALL_TRIPS:
            return setTripsList(state, action.payload);
        case TripAction.SEARCH_TRIPS:
            return setTripsList(state, action.payload);
        case TripAction.TRIP_DETAILS:
            return tripDetails(state, action.payload);
        case TripAction.MY_TRIPS:
            return setMyTrips(state, action.payload);
        default:
            return state;
    }
}
