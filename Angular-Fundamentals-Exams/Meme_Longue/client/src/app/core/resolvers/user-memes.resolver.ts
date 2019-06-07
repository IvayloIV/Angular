import { Injectable } from "@angular/core";
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, mapTo } from 'rxjs/operators';

import { AppState } from 'src/app/store/app.state';
import { MemeService } from '../services/meme.service';
import { MemeDetails } from '../models/meme/meme-details.model';
import { UserMemes } from 'src/app/store/actions/meme.action';

@Injectable()
export class UserMemesResolver implements Resolve<boolean> {
    constructor(
        private memeService: MemeService,
        private store: Store<AppState>
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        const id = route.params['id'];
        return this.memeService.getByUserId(id)
            .pipe(tap((data: MemeDetails[]) => {
                this.store.dispatch(new UserMemes(data));
            }), mapTo(true));
    }

}
