import { Component, Input } from '@angular/core';
import { MovieInfo } from 'src/app/core/models/movie/movie-info.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  @Input() movie: MovieInfo;
}
