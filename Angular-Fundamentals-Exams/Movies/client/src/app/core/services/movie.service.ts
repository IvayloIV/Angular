import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { AppState } from 'src/app/store/app.state';
import { BuyTicket } from 'src/app/store/actions/movie.action';

import { MovieInfo } from '../models/movie/movie-info.model';
import { MovieCreate } from '../models/movie/movie-create.model';
import { MovieDetails } from '../models/movie/movie-details.model';

const BASE_URL = 'https://baas.kinvey.com/';
const APP_KEY = 'kid_rJkEqpLj4';
const MOVIE_URL = BASE_URL + 'appdata/' + APP_KEY + '/movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private store: Store<AppState>
  ) { }

  getAllMovies(): Observable<MovieInfo[]> {
    return this.http.get<MovieInfo[]>(MOVIE_URL);
  }

  createMovie(payload: MovieCreate) {
    return this.http.post(MOVIE_URL, payload);
  }

  getMyMovies(): Observable<MovieInfo[]> {
    const userId = sessionStorage.getItem('userId');
    return this.http.get<MovieInfo[]>(MOVIE_URL + `?query={"_acl.creator":"${userId}"}`);
  }

  getMovieDetails(movieId: string): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(MOVIE_URL + `/${movieId}`);
  }

  editMovie(movieId: string, payload: MovieCreate) {
    return this.http.put(MOVIE_URL + `/${movieId}`, payload);
  }

  removeMovie(movieId: string) {
    return this.http.delete(MOVIE_URL + `/${movieId}`);
  }

  buyTicket(movieId: string, payload) {
    return this.http.put(MOVIE_URL + `/${movieId}`, Object.assign({}, payload, { tickets: payload.tickets - 1 }))
      .pipe(tap(() => {
        this.store.dispatch(new BuyTicket(movieId));
        this.toastr.success(`Successfully bought ticket for ${payload.title}!`);
      }));
  }
}