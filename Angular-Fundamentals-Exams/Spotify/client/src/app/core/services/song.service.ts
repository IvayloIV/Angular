import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SongDetails } from '../models/song/song-details';
import { Observable } from 'rxjs';
import { SongCreate } from '../models/song/song-create';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { RemoveSong, LikeSong, ListenSong } from 'src/app/store/actions/song.action';
import { tap } from 'rxjs/operators';

const BASE_URL = 'https://baas.kinvey.com/';
const APP_KEY = 'kid_Skk9OGJi4';
const SONGS_ALL_URL = BASE_URL + 'appdata/' + APP_KEY + '/songs?query={}&sort={}';
const SONGS_CREATE_URL = BASE_URL + 'appdata/' + APP_KEY + '/songs';
const SONGS_REMOVE_URL = BASE_URL + 'appdata/' + APP_KEY + '/songs';
const SONG_DETAILS_URL = BASE_URL + 'appdata/' + APP_KEY + '/songs';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  constructor(
    private http: HttpClient,
    private store: Store<AppState>
  ) { }

  getAllSongs(): Observable<SongDetails[]> {
    return this.http.get<SongDetails[]>(SONGS_ALL_URL);
  }

  createSong(body: SongCreate) {
    return this.http.post(SONGS_CREATE_URL, body);
  }

  removeSong(songId: string) {
    return this.http.delete(SONGS_REMOVE_URL + `/${songId}`)
      .pipe(tap(() => {
        this.store.dispatch(new RemoveSong(songId));
      }));
  }

  likeSong(song: SongDetails) {
    const likedSong = Object.assign({}, song, { likes: song.likes + 1 });
    return this.http.put(SONG_DETAILS_URL + `/${song._id}`, likedSong)
      .pipe(tap(() => {
        this.store.dispatch(new LikeSong(song._id));
      }));
  }

  listenSong(song: SongDetails) {
    const listenedSong = Object.assign({}, song, { listened: song.listened + 1 });
    return this.http.put(SONG_DETAILS_URL + `/${song._id}`, listenedSong)
      .pipe(tap(() => {
        this.store.dispatch(new ListenSong(song._id));
      }));
  }

  getMySongs(): Observable<SongDetails[]> {
    const userId = sessionStorage.getItem('userId');
    return this.http.get<SongDetails[]>(SONG_DETAILS_URL + `?query={"_acl.creator":"${userId}"}`);
  }
}