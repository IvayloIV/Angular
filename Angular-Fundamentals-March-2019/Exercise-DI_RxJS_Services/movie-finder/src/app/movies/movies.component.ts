import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import IMovie from '../interfaces/IMovie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popular: IMovie[];
  theaters: IMovie[];

  constructor(
    private movieService: MoviesService
  ) { }

  ngOnInit() {
    this.movieService.getPopular()
      .subscribe(data => this.popular = data['results'].slice(0, 6));

    this.movieService.getTheaters()
      .subscribe(data => this.theaters = data['results'].slice(0, 6));
  }
}
