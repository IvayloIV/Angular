import { MovieInfo } from 'src/app/core/models/movie/movie-info.model';
import { MovieDetails } from 'src/app/core/models/movie/movie-details.model';

export interface MovieState {
    allMovies: MovieInfo[];
    myMovies: MovieInfo[];
    movieDetails: MovieDetails;
}
