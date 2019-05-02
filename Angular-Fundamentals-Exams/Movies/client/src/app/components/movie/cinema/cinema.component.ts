import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { allMovies } from 'src/app/store/selectors/movie.selector';
import { Observable, Subscription } from 'rxjs';
import { MovieInfo } from 'src/app/core/models/movie/movie-info.model';
import { MovieService } from 'src/app/core/services/movie.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss']
})
export class CinemaComponent implements OnInit, OnDestroy {
  movies$: Observable<MovieInfo[]>;
  genre: string;
  subs: Subscription;

  constructor(
    private store: Store<AppState>,
    private movieService: MovieService,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.subs = this.route.queryParams.subscribe((queryParams) => {
      const search = queryParams['search'];
      this.genre = search;
    });

    this.movies$ = this.store.select(allMovies);
  }

  buyTicket(movie: MovieInfo) {
    if (movie.tickets <= 0) {
      this.toastr.error('Out of tickets.');
      return;
    }
    
    this.movieService.buyTicket(movie._id, movie).subscribe();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
