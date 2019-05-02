import { Injectable } from "@angular/core";
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, mapTo } from 'rxjs/operators';

import { AppState } from 'src/app/store/app.state';
import { MovieService } from '../services/movie.service';
import { MovieInfo } from '../models/movie/movie-info.model';
import { GetAllMovies } from 'src/app/store/actions/movie.action';

@Injectable()
export class AllMoviesResolver implements Resolve<boolean> {
    constructor(
        private movieService: MovieService,
        private store: Store<AppState>
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.movieService.getAllMovies()
            .pipe(tap((data: MovieInfo[]) => {
                this.store.dispatch(new GetAllMovies(data));
            }), mapTo(true));
    }
}
