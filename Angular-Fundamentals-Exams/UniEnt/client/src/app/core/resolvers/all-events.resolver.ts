import { Injectable } from "@angular/core";
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, mapTo } from 'rxjs/operators';

import { AppState } from 'src/app/store/app.state';
import { EventService } from '../services/event.service';
import { EventInfo } from '../models/event/event-info.model';
import { GetAllEvents } from 'src/app/store/actions/event.action';

@Injectable()
export class AllEventsResolver implements Resolve<boolean> {
    constructor(
        private eventService: EventService,
        private store: Store<AppState>
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.eventService.getAllEvents()
            .pipe(tap((data: EventInfo[]) => {
                this.store.dispatch(new GetAllEvents(data));
            }), mapTo(true));
    }

}
