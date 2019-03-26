import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-search-form',
  templateUrl: './movie-search-form.component.html',
  styleUrls: ['./movie-search-form.component.css']
})
export class MovieSearchFormComponent implements OnInit {
  query: string = '';

  constructor(
    private route: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const query = this.activeRoute.snapshot.queryParams.query;
    if (query) {
      this.query = query;
    }
  }

  search() {
    this.route.navigate(['/movies/search'], { queryParams: { query: this.query } });
  }
}
