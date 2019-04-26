import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { allSongs } from 'src/app/store/selectors/song.selector';
import { SongDetails } from 'src/app/core/models/song/song-details';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-song-all',
  templateUrl: './song-all.component.html',
  styleUrls: ['./song-all.component.scss']
})
export class SongAllComponent implements OnInit {
  songs$: Observable<SongDetails[]>

  constructor(
    private state: Store<AppState>,
  ) { }

  ngOnInit() {
    this.songs$ = this.state.select(allSongs);
  }
}
