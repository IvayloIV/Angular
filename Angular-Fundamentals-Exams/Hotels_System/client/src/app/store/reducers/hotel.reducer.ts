import { HotelState } from "../state/hotel.state";
import * as HotelAction from '../actions/hotel.action';

const initialState: HotelState = {
    hotelList: [],
    hotelDetails: null
};

function setHotelList(state: HotelState, payload) {
    return Object.assign({}, state, { 
        hotelList: payload
    });
}

function setHotelDetails(state: HotelState, payload) {
    return Object.assign({}, state, { 
        hotelDetails: payload
    });
}

export function hotelReducer(
    state: HotelState = initialState,
    action: HotelAction.Type
) {
    switch (action.type) {
        case HotelAction.GET_HOTEL_LIST:
            return setHotelList(state, action.payload);
        case HotelAction.GET_HOTEL_DETAILS:
            return setHotelDetails(state, action.payload);
        default:
            return state;
    }
}
