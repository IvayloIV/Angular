import { Action } from '@ngrx/store';
import { SongDetails } from 'src/app/core/models/song/song-details';

export const GET_ALL_SONGS = '[SONG] All';
export const REMOVE_SONGS = '[SONG] Remove';
export const LIKE_SONGS = '[SONG] Like';
export const LISTEN_SONGS = '[SONG] Listen';

export class GetAllSong implements Action {
    type: string = GET_ALL_SONGS;
    constructor(public payload: SongDetails[]) {}
}

export class RemoveSong implements Action {
    type: string = REMOVE_SONGS;
    constructor(public payload: string) {}
}

export class LikeSong implements Action {
    type: string = LIKE_SONGS;
    constructor(public payload: string) {}
}

export class ListenSong implements Action {
    type: string = LISTEN_SONGS;
    constructor(public payload: string) {}
}

export type Type = GetAllSong | RemoveSong | LikeSong | ListenSong;
