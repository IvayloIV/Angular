import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieInfo } from 'src/app/core/models/movie/movie-info.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { myMovies } from 'src/app/store/selectors/movie.selector';
import { MovieService } from 'src/app/core/services/movie.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.scss']
})
export class MyMoviesComponent implements OnInit {
  movies$: Observable<MovieInfo[]>;

  constructor(
    private store: Store<AppState>,
    private movieService: MovieService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.movies$ = this.store.select(myMovies);
  }

  buyTicket(movie: MovieInfo) {
    if (movie.tickets <= 0) {
      this.toastr.error('Out of tickets.');
      return;
    }
    
    this.movieService.buyTicket(movie._id, movie).subscribe();
  }

}
