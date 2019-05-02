import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { MovieService } from 'src/app/core/services/movie.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ValidateUrl } from 'src/app/core/validations/validateUrl';
import { AppState } from 'src/app/store/app.state';
import { movieDetails } from 'src/app/store/selectors/movie.selector';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.scss']
})
export class MovieEditComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private movieService: MovieService,
    private toastr: ToastrService,
    private router: Router,
    private store: Store<AppState>,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.store.select(movieDetails).subscribe((movie) => {
      this.buildForm(movie);
    });
  }

  buildForm(movie) {
    this.form = this.fb.group({
      title: [movie.title, [Validators.required, Validators.minLength(6)]],
      description: [movie.description, [Validators.required, Validators.minLength(10)]],
      imageUrl: [movie.imageUrl, [Validators.required, ValidateUrl]],
      tickets: [movie.tickets, [Validators.required, Validators.min(1)]],
      genres: [movie.genres.join(','), Validators.nullValidator]
    });
  }

  get f() {
    return this.form.controls;
  }

  edit() {
    let movie = this.form.value;
    movie.genres = movie.genres.split(',');
    const movieId = this.route.snapshot.params['id'];

    this.movieService.editMovie(movieId, movie).subscribe((json) => {
      if (!json['error']) {
        this.toastr.success('Movie edited successfully.');
        this.router.navigate([`movie/details/${movieId}`]);
      } else {
        this.toastr.error(json['description']);
      }
    });
  }


}
