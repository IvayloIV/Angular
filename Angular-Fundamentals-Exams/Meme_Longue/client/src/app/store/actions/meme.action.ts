import { Action } from '@ngrx/store';
import { MemeDetails } from 'src/app/core/models/meme/meme-details.model';

export const GET_ALL_MEMES = '[MEME] All';
export const GET_MEME_DETAILS = '[MEME] Details';
export const REMOVE_MEME = '[MEME] Remove';
export const GET_USER_MEMES = '[MEME] User';

export class GetAllMemes implements Action {
    type: string = GET_ALL_MEMES;
    constructor(public payload: MemeDetails[]) {}
}

export class GetMemeDetails implements Action {
    type: string = GET_MEME_DETAILS;
    constructor(public payload: MemeDetails) {}
}

export class RemoveMeme implements Action {
    type: string = REMOVE_MEME;
    constructor(public payload: string) {}
}

export class UserMemes implements Action {
    type: string = GET_USER_MEMES;
    constructor(public payload: MemeDetails[]) {}
}

export type Type = GetAllMemes | GetMemeDetails | RemoveMeme | UserMemes;
