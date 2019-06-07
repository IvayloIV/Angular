import { MemeState } from "../states/meme.state";
import * as MemeAction from '../actions/meme.action';

const initialState: MemeState = {
    allMemes: [],
    memeDetails: null,
    userMemes: []
};

function setAllMemes(state: MemeState, payload) {
    return Object.assign({}, state, { 
        allMemes: payload
    });
}

function setMemeDetails(state: MemeState, payload) {
    return Object.assign({}, state, { 
        memeDetails: payload
    });
}

function removeMeme(state: MemeState, payload) {
    return Object.assign({}, state, { 
        allMemes: state.allMemes.filter(a => a._id !== payload),
        userMemes: state.userMemes.filter(a => a._id !== payload)
    });
}

function setUserMemes(state: MemeState, payload) {
    return Object.assign({}, state, { 
        userMemes: payload
    });
}

export function memeReducer(
    state: MemeState = initialState,
    action: MemeAction.Type
) {
    switch (action.type) {
        case MemeAction.GET_ALL_MEMES:
            return setAllMemes(state, action.payload);
        case MemeAction.GET_MEME_DETAILS:
            return setMemeDetails(state, action.payload);
        case MemeAction.REMOVE_MEME:
            return removeMeme(state, action.payload);
        case MemeAction.GET_USER_MEMES:
            return setUserMemes(state, action.payload);
        default:
            return state;
    }
}
