import { Action } from '@ngrx/store';
import { UserDetails } from 'src/app/core/models/user/user-details.model';

export const GET_USER_DETAILS = '[USER] Details';

export class GetUserDetails implements Action {
    type: string = GET_USER_DETAILS;
    constructor(public payload: UserDetails) {}
}

export type Type = GetUserDetails;
