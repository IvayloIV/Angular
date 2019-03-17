import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_KEY = 'd814a94aa1c05911ee7aa0e901e4db80';
const API_KEY_ALT = '?api_key=d814a94aa1c05911ee7aa0e901e4db80';

@Injectable()
export class MoviesService {
  path = 'https://api.themoviedb.org/3/';
  popular = 'discover/movie?sort_by=popularity.desc';
  theaters = 'discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22';
  kids = 'discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc';
  dramas = 'discover/movie?with_genres=18&primary_release_year=2014';
  authentication = '&api_key=';

  constructor(
    private http: HttpClient
  ) { }

  getPopular() {
    return this.http.get<Object>(this.path + this.popular + this.authentication + API_KEY);
  }

  getTheaters() {
    return this.http.get<Object>(this.path + this.theaters + this.authentication + API_KEY);
  }

  getKids() {
    return this.http.get<Object>(this.path + this.popular + this.authentication + API_KEY);
  }

  getDramas() {
    return this.http.get<Object>(this.path + this.dramas + this.authentication + API_KEY);
  }

  findAMovie(name) {
    return this.http.get<Object>(this.path + 'search/movie' + API_KEY_ALT + `&query=${name}`)
  }

  getMovie(id) {
    return this.http.get<Object>(this.path + `movie/${id}` + API_KEY_ALT);
  }
}
