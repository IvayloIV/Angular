import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import IMovieDetails from 'src/app/core/interfaces/IMovieDetails';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: IMovieDetails

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.movie = this.route.snapshot.data['singleMovie'];
  }
}
