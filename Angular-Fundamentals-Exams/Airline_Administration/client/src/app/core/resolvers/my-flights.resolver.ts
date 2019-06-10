import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { tap, mapTo } from 'rxjs/operators';

import { FlightService } from '../services/flight.service';
import { GetMyFlights } from 'src/app/store/actions/flight.action';
import { FlightDetails } from '../models/flight/flight-details.model';

@Injectable()
export class MyFlightsResolver implements Resolve<boolean> {
    constructor(
        private flightService: FlightService,
        private store: Store<AppState>
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.flightService.myFlights()
            .pipe(tap((flights: FlightDetails[]) => {
                this.store.dispatch(new GetMyFlights(flights));
            }), mapTo(true));
    }
}