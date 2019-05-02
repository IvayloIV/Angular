import { AppState } from '../app.state';

export const allMovies = (state: AppState) => state.movie.allMovies;
export const myMovies = (state: AppState) => state.movie.myMovies;
export const movieDetails = (state: AppState) => state.movie.movieDetails;
