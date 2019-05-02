import { Action } from '@ngrx/store';
import { MovieInfo } from 'src/app/core/models/movie/movie-info.model';
import { MovieDetails } from 'src/app/core/models/movie/movie-details.model';

export const GET_ALL_MOVIES = '[Movie] All';
export const GET_MY_MOVIES = '[Movie] My';
export const GET_MOVIE_DETAILS = '[Movie] Details';
export const BUY_TICKET = '[Movie] Buy ticket';

export class GetAllMovies implements Action {
    type: string = GET_ALL_MOVIES;
    constructor(public payload: MovieInfo[]) {}
}

export class GetMyMovies implements Action {
    type: string = GET_MY_MOVIES;
    constructor(public payload: MovieInfo[]) {}
}

export class GetMovieDetails implements Action {
    type: string = GET_MOVIE_DETAILS;
    constructor(public payload: MovieDetails) {}
}

export class BuyTicket implements Action {
    type: string = BUY_TICKET;
    constructor(public payload: string) {}
}

export type Type = GetAllMovies | GetMyMovies | GetMovieDetails | BuyTicket;
