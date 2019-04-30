import { Injectable } from "@angular/core";
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, mapTo } from 'rxjs/operators';

import { AppState } from 'src/app/store/app.state';
import { EventService } from '../services/event.service';
import { GetEventDetails } from 'src/app/store/actions/event.action';
import { EventDetails } from '../models/event/event-details.model';

@Injectable()
export class EventDetailsResolver implements Resolve<boolean> {
    constructor(
        private eventService: EventService,
        private store: Store<AppState>
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        const id = route.params['id'];
        return this.eventService.getEventDetails(id)
            .pipe(tap((data: EventDetails) => {
                this.store.dispatch(new GetEventDetails(data));
            }), mapTo(true));
    }

}
