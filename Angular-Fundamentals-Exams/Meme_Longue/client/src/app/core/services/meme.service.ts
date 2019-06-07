import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { tap } from 'rxjs/operators';

import { MemeDetails } from '../models/meme/meme-details.model';
import { MemeCreate } from '../models/meme/meme-create.model';
import { RemoveMeme } from 'src/app/store/actions/meme.action';

const APP_KEY = 'kid_SkuSX2vDm';
const BASE_URL_MEME = `https://baas.kinvey.com/appdata/${APP_KEY}/memes`;

@Injectable({
  providedIn: 'root'
})
export class MemeService {
  constructor(
    private http: HttpClient,
    private store: Store<AppState>
  ) { }

  getAllMemes(): Observable<MemeDetails[]> {
    return this.http.get<MemeDetails[]>(BASE_URL_MEME + '?query={}&sort={"_kmd.ect": -1}');
  }

  createMeme(meme: MemeCreate) {
    return this.http.post(BASE_URL_MEME, meme);
  }

  detailsMeme(id: string): Observable<MemeDetails> {
    return this.http.get<MemeDetails>(BASE_URL_MEME + `/${id}`);
  }

  editMeme(id: string, meme: MemeCreate) {
    return this.http.put(BASE_URL_MEME + `/${id}`, meme);
  }

  removeMeme(id: string) {
    return this.http.delete(BASE_URL_MEME + `/${id}`)
      .pipe(tap(() => {
        this.store.dispatch(new RemoveMeme(id));
      }));
  }

  getByUserId(userId: string): Observable<MemeDetails[]> {
    return this.http.get<MemeDetails[]>(BASE_URL_MEME + `?query={"_acl.creator":"${userId}"}&sort={"_kmd.ect": -1}`);
  }
}
