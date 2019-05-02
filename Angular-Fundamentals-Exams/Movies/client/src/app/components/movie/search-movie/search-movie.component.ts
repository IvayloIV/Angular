import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {
  form: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      search: ['']
    });
  }

  search() {
    let searchValue = this.form.value['search'];
    this.router.navigate(['/movie/all'], { queryParams: { search: searchValue } });
  }

}
