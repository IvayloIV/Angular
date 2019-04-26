import { Injectable } from "@angular/core";
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, mapTo } from 'rxjs/operators';

import { AppState } from 'src/app/store/app.state';
import { GetAllSong } from 'src/app/store/actions/song.action';
import { SongDetails } from '../models/song/song-details';
import { SongService } from '../services/song.service';

@Injectable()
export class SongAllResolver implements Resolve<boolean> {
    constructor(
        private songService: SongService,
        private store: Store<AppState>
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.songService.getAllSongs()
            .pipe(tap((data: SongDetails[]) => {
                this.store.dispatch(new GetAllSong(data));
            }), mapTo(true));
    }

}
