import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { MovieDetails } from 'src/app/core/models/movie/movie-details.model';
import { AppState } from 'src/app/store/app.state';
import { movieDetails } from 'src/app/store/selectors/movie.selector';
import { MovieService } from 'src/app/core/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movie$: Observable<MovieDetails>;

  constructor(
    private store: Store<AppState>,
    private movieService: MovieService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.movie$ = this.store.select(movieDetails);
  }

  buyTicket(movie: MovieDetails) {
    if (movie.tickets <= 0) {
      this.toastr.error('Out of tickets.');
      return;
    }
    
    this.movieService.buyTicket(movie._id, movie).subscribe();
  }
  
}
