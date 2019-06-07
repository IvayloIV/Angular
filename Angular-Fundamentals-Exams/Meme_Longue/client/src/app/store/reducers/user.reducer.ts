import { UserState } from "../states/user.state";
import * as UserAction from '../actions/user.action';

const initialState: UserState = {
    userDetails: null
};

function setUserDetails(state: UserState, payload) {
    return Object.assign({}, state, { 
        userDetails: payload
    });
}

export function userReducer(
    state: UserState = initialState,
    action: UserAction.Type
) {
    switch (action.type) {
        case UserAction.GET_USER_DETAILS:
            return setUserDetails(state, action.payload);
        default:
            return state;
    }
}
