import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MovieRoutingModule } from './movie-routing.module';
import { movieComponents } from './index';

import { AllMoviesResolver } from 'src/app/core/resolvers/all-movies.resolver';
import { MyMoviesResolver } from 'src/app/core/resolvers/my-movies.resolver';
import { MovieDetailsResolver } from 'src/app/core/resolvers/movie-details.resolver';
import { SortMoviesPipe } from '../shared/pipes/sort-movies.pipe';
import { FilterMoviesPipe } from '../shared/pipes/filter-movies.pipe';

@NgModule({
  declarations: [
    ...movieComponents,
    SortMoviesPipe,
    FilterMoviesPipe
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    AllMoviesResolver,
    MyMoviesResolver,
    MovieDetailsResolver
  ]
})
export class MovieModule { }
