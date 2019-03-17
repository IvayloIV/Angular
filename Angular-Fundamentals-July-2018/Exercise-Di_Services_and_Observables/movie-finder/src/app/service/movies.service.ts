import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiKey = 'd814a94aa1c05911ee7aa0e901e4db80';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  path = 'https://api.themoviedb.org/3/';
  popular = 'discover/movie?sort_by=popularity.desc';
  theaters = 'discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22';
  authentication = '&api_key=';

  constructor(
    private http: HttpClient
  ) { }

  getPopular() {
    return this.http.get(this.path + this.popular + this.authentication + apiKey);
  }

  getTheaters() {
    return this.http.get(this.path + this.theaters + this.authentication + apiKey);
  }
}
