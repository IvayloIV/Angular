import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popular: Object;
  theaters: Object;
  popularKids: Object;
  dramas: Object;
  searchingData: Array<Object> = [];

  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit() {
    this.moviesService.getPopular()
      .subscribe(data => this.popular = data);

    this.moviesService.getTheaters()
      .subscribe(data => this.theaters = data);

    this.moviesService.getKids()
      .subscribe(data => this.popularKids = data);

    this.moviesService.getDramas()
      .subscribe(data => this.dramas = data);
  }

  search({search}) {
    this.moviesService.findAMovie(search)
      .subscribe(data => {
        this.searchingData = data['results'];
      });
  }
}
