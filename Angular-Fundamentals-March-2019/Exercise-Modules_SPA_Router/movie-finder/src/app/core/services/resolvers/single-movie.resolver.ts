import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MoviesService } from '../movies.service';
import IMovieDetails from '../../interfaces/IMovieDetails';

@Injectable()
export class SingleMovieResolver implements Resolve<IMovieDetails> {
    constructor(
        private movieService: MoviesService
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.movieService.getMovieById(route.params['id']);
    }
}
