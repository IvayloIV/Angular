import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { allSongs } from 'src/app/store/selectors/song.selector';
import { Observable } from 'rxjs';
import { SongDetails } from 'src/app/core/models/song/song-details';

@Component({
  selector: 'app-my-songs',
  templateUrl: './my-songs.component.html',
  styleUrls: ['./my-songs.component.scss']
})
export class MySongsComponent implements OnInit {
  mySongs$: Observable<SongDetails[]>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.mySongs$ = this.store.select(allSongs);
  }

}
