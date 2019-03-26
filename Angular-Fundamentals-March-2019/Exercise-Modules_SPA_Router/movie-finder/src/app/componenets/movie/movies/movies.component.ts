import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import IMovie from 'src/app/core/interfaces/IMovie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popular: IMovie[];
  theaters: IMovie[];
  popularKids: IMovie[];
  dramas: IMovie[];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let [popular, popularKids, dramas, theaters] = this.route.snapshot.data['movies'];
    this.popular = popular;
    this.popularKids = popularKids;
    this.dramas = dramas;
    this.theaters = theaters;
  }
}
