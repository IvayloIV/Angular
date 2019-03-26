import { Component, OnInit, Input } from '@angular/core';
import IMovie from 'src/app/core/interfaces/IMovie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movie: IMovie;

  constructor() { }

  ngOnInit() {
  }
}
