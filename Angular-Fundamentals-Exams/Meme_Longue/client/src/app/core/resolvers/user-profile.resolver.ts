import { Injectable } from "@angular/core";
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, mapTo } from 'rxjs/operators';

import { AppState } from 'src/app/store/app.state';
import { UserService } from '../services/user.service';
import { UserDetails } from '../models/user/user-details.model';
import { GetUserDetails } from 'src/app/store/actions/user.action';

@Injectable()
export class UserProfileResolver implements Resolve<boolean> {
    constructor(
        private userService: UserService,
        private store: Store<AppState>
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        const id = route.params['id'];
        return this.userService.getUserDetails(id)
            .pipe(tap((data: UserDetails) => {
                this.store.dispatch(new GetUserDetails(data));
            }), mapTo(true));
    }

}
