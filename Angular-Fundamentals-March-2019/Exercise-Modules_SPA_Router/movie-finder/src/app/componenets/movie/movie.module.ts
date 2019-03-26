import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { movieComponents } from './index';
import { SingleMovieResolver } from 'src/app/core/services/resolvers/single-movie.resolver';
import { HomeMovieResolver } from 'src/app/core/services/resolvers/home-movies.resolver';
import { FormsModule } from '@angular/forms';
import { MovieRoutingModule } from './movie-routing.module';

@NgModule({
  declarations: [
    ...movieComponents
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    FormsModule
  ],
  providers: [SingleMovieResolver, HomeMovieResolver],
  exports: [MovieRoutingModule]
})
export class MovieModule { }
