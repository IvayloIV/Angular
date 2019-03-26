import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import IMovie from '../interfaces/IMovie';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import IMovieDetails from '../interfaces/IMovieDetails';

const BASE_URL: string = 'https://api.themoviedb.org/3/';
const API_KEY: string = '&api_key=d814a94aa1c05911ee7aa0e901e4db80';
const API_KEY_ALT: string = '?api_key=d814a94aa1c05911ee7aa0e901e4db80';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private popularEndPoint: string = 'discover/movie?sort_by=popularity.desc';
  private theatersEndPoint: string = 'discover/movie?primary_release_data.gte=2018-07-15&primary_release_date.lte=2019-02-01';
  private popularKidsEndPoint: string = 'discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc';
  private dramasEndPoint: string = 'discover/movie?with_genres=18&primary_release_year=2019';

  constructor(private http: HttpClient) { }

  getPopular(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(BASE_URL + this.popularEndPoint + API_KEY)
      .pipe(
        map((data) => data['results'].slice(0, 6))
      );
  }

  getTheaters(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(BASE_URL + this.theatersEndPoint + API_KEY)
      .pipe(
        map((data) => data['results'].slice(0, 6))
      );
  }

  getPopularKids(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(BASE_URL + this.popularKidsEndPoint + API_KEY)
      .pipe(
        map((data) => data['results'].slice(0, 6))
      );
  }

  getDramas(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(BASE_URL + this.dramasEndPoint + API_KEY)
      .pipe(
        map((data) => data['results'].slice(0, 6))
      );
  }

  getMovieById(id): Observable<IMovieDetails> {
    return this.http.get<IMovieDetails>(BASE_URL + `movie/${id}` + API_KEY_ALT);
  }

  searchMovies(query: string): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(BASE_URL + `search/movie` + API_KEY_ALT + `&query=${query}`)
      .pipe(
        map((data) => data['results'].slice(0, 6))
      );
  }
}
