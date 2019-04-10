import { Action } from '@ngrx/store';
import { ReviewDetails } from 'src/app/core/contracts/review/Review-details';

export const GET_REVIEW_LIST = '[REVIEW] Get list';
export const CREATE_REVIEW = '[REVIEW] Create';

export class GetReviewList implements Action {
    type: string = GET_REVIEW_LIST;
    constructor(public payload: ReviewDetails[]) {}
}

export class CreateReview implements Action {
    type: string = CREATE_REVIEW;
    constructor(public payload: ReviewDetails) {}
}

export type Type = GetReviewList | CreateReview;