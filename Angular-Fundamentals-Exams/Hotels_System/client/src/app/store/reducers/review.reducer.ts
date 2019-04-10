import { ReviewState } from "../state/review.state";
import * as ReviewAction from '../actions/review.action';

const initialState: ReviewState = {
    reviewList: []
};

function setReviewList(state: ReviewState, payload) {
    return Object.assign({}, state, { 
        reviewList: payload
    });
}

function createReview(state: ReviewState, payload) {
    return Object.assign({}, state, { 
        reviewList: [payload, ...state.reviewList]
    });
}

export function reviewReducer(
    state: ReviewState = initialState,
    action: ReviewAction.Type
) {
    switch (action.type) {
        case ReviewAction.GET_REVIEW_LIST:
            return setReviewList(state, action.payload);
        case ReviewAction.CREATE_REVIEW:
            return createReview(state, action.payload);
        default:
            return state;
    }
}
