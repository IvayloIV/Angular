import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import IMovie from 'src/app/core/interfaces/IMovie';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {
  movies: IMovie[];
  query: string;

  constructor(
    private route: ActivatedRoute,
    private movieService: MoviesService
  ) { 
    this.query = this.route.snapshot.queryParams.query;
  }

  ngDoCheck() {
    const newQuery = this.route.snapshot.queryParams.query;
    if (this.query !== newQuery) {
      this.query = newQuery;
      this.loadMovies();
    }
  }
  
  ngOnInit() {
    this.loadMovies();
  }

  loadMovies() {
    this.movieService.searchMovies(this.query)
      .subscribe(data => this.movies = data);
  }
}
