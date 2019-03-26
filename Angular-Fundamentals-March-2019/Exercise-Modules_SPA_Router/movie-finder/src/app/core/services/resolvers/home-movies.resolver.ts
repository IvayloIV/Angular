import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { forkJoin } from 'rxjs';
import { MoviesService } from '../movies.service';
import IMovie from '../../interfaces/IMovie';

@Injectable()
export class HomeMovieResolver implements Resolve<IMovie[]> {
    constructor(
        private movieService: MoviesService
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        return forkJoin(
            this.movieService.getPopular(),
            this.movieService.getPopularKids(),
            this.movieService.getDramas(),
            this.movieService.getTheaters()
        );
    }
}
