import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { tap, mapTo } from 'rxjs/operators';

import { FlightService } from '../services/flight.service';
import { FlightInfo } from '../models/flight/flight-info.model';
import { GetPublishedFlights } from 'src/app/store/actions/flight.action';

@Injectable()
export class PublishedFlightsResolver implements Resolve<boolean> {
    constructor(
        private flightService: FlightService,
        private store: Store<AppState>
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.flightService.getPublishFlights()
            .pipe(tap((flights: FlightInfo[]) => {
                this.store.dispatch(new GetPublishedFlights(flights));
            }), mapTo(true));
    }
}