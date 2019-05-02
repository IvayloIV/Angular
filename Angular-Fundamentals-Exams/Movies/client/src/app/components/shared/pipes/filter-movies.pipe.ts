import { Pipe, PipeTransform } from '@angular/core';
import { MovieInfo } from 'src/app/core/models/movie/movie-info.model';

@Pipe({ name: 'filterMovies' })
export class FilterMoviesPipe implements PipeTransform {
  transform(value: MovieInfo[], genre: string): MovieInfo[] {
      if (!genre) {
        return value;
      }
      return value.filter(a => a.genres.indexOf(genre) !== -1);
  }
}