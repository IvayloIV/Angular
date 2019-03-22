import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import IMovie from '../interfaces/IMovie';
import { Observable } from 'rxjs';

const BASE_URL: string = 'https://api.themoviedb.org/3/';
const API_KEY: string = '&api_key=d814a94aa1c05911ee7aa0e901e4db80';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private popularEndPoint: string = 'discover/movie?sort_by=popularity.desc';
  private theatersEndPoint: string = 'discover/movie?primary_release_data.gte=2018-07-15&primary_release_date.lte=2019-02-01';

  constructor(private http: HttpClient) { }

  getPopular(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(BASE_URL + this.popularEndPoint + API_KEY);
  }

  getTheaters(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(BASE_URL + this.theatersEndPoint + API_KEY);
  }
}
