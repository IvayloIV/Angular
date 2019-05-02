import { Injectable } from "@angular/core";
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, mapTo } from 'rxjs/operators';

import { AppState } from 'src/app/store/app.state';
import { MovieService } from '../services/movie.service';
import { GetMovieDetails } from 'src/app/store/actions/movie.action';
import { MovieDetails } from '../models/movie/movie-details.model';

@Injectable()
export class MovieDetailsResolver implements Resolve<boolean> {
    constructor(
        private movieService: MovieService,
        private store: Store<AppState>
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        const movieId = route.params['id'];
        return this.movieService.getMovieDetails(movieId)
            .pipe(tap((data: MovieDetails) => {
                this.store.dispatch(new GetMovieDetails(data));
            }), mapTo(true));
    }
}
