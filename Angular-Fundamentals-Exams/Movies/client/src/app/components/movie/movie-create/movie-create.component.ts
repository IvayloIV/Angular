import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidateUrl } from 'src/app/core/validations/validateUrl';
import { MovieService } from 'src/app/core/services/movie.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.scss']
})
export class MovieCreateComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private movieService: MovieService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(6)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      imageUrl: ['', [Validators.required, ValidateUrl]],
      tickets: ['', [Validators.required, Validators.min(1)]],
      genres: ['', Validators.nullValidator]
    });
  }

  get f() {
    return this.form.controls;
  }

  create() {
    let movie = this.form.value;
    movie.genres = movie.genres.split(' ');

    this.movieService.createMovie(movie).subscribe((json) => {
      if (!json['error']) {
        this.toastr.success('Movie created successfully.');
        this.router.navigate(['/movie/all']);
      } else {
        this.toastr.error(json['description']);
      }
    });
  }

}
