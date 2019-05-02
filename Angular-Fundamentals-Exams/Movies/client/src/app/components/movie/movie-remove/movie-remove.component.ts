import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { Observable } from 'rxjs';
import { MovieDetails } from 'src/app/core/models/movie/movie-details.model';
import { movieDetails } from 'src/app/store/selectors/movie.selector';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/core/services/movie.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-movie-remove',
  templateUrl: './movie-remove.component.html',
  styleUrls: ['./movie-remove.component.scss']
})
export class MovieRemoveComponent implements OnInit {
  movie$: Observable<MovieDetails>;

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private movieService: MovieService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.movie$ = this.store.select(movieDetails);
  }

  removeMovie() {
    const movieId = this.route.snapshot.params['id'];
    this.movieService.removeMovie(movieId).subscribe(() => {
      this.toastr.success('Movie removed successfully');
      this.router.navigate(['/movie/all']);
    });
  }
}
