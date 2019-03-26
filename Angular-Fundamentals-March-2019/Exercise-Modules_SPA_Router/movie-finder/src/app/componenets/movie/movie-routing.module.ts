import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { HomeMovieResolver } from 'src/app/core/services/resolvers/home-movies.resolver';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SingleMovieResolver } from 'src/app/core/services/resolvers/single-movie.resolver';

const routes: Routes = [
    { path: '', component: MoviesComponent, resolve: { movies: HomeMovieResolver } },
    { path: 'search', component: MovieSearchComponent },
    { path: ':id', component: MovieDetailsComponent, resolve: { singleMovie: SingleMovieResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
