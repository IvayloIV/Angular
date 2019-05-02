import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CinemaComponent } from './cinema/cinema.component';
import { MovieCreateComponent } from './movie-create/movie-create.component';
import { MyMoviesComponent } from './my-movies/my-movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { MovieRemoveComponent } from './movie-remove/movie-remove.component';

import { AllMoviesResolver } from 'src/app/core/resolvers/all-movies.resolver';
import { MyMoviesResolver } from 'src/app/core/resolvers/my-movies.resolver';
import { MovieDetailsResolver } from 'src/app/core/resolvers/movie-details.resolver';

const routes: Routes = [
  { path: 'all', component: CinemaComponent, resolve: { allMovies: AllMoviesResolver } },
  { path: 'create', component: MovieCreateComponent },
  { path: 'my', component: MyMoviesComponent, resolve: { myMovies: MyMoviesResolver } },
  { path: 'details/:id', component: MovieDetailsComponent, resolve: { detailsMovie: MovieDetailsResolver } },
  { path: 'edit/:id', component: MovieEditComponent, resolve: { detailsMovie: MovieDetailsResolver } },
  { path: 'remove/:id', component: MovieRemoveComponent, resolve: { detailsMovie: MovieDetailsResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
