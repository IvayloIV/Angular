import { Pipe, PipeTransform } from '@angular/core';
import { MovieInfo } from 'src/app/core/models/movie/movie-info.model';

@Pipe({ name: 'sortMovies' })
export class SortMoviesPipe implements PipeTransform {
  transform(value: MovieInfo[]): MovieInfo[] {
      return value.sort((a, b) => b.tickets - a.tickets);
  }
}