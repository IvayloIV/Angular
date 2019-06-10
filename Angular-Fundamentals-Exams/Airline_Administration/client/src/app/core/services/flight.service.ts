import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FlightInfo } from '../models/flight/flight-info.model';
import { Observable } from 'rxjs';
import { CreateFlight } from '../models/flight/create-flight.model';
import { FlightDetails } from '../models/flight/flight-details.model';
import { tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { RemoveFlight } from 'src/app/store/actions/flight.action';

const APP_KEY = 'kid_SJaqnTWH7';
const BASE_FLIGHT_URL = 'https://baas.kinvey.com/appdata/' + APP_KEY + '/flights';

@Injectable({
    providedIn: 'root'
})
export class FlightService {
    constructor(
        private http: HttpClient,
        private store: Store<AppState>
    ) {}

    getPublishFlights(): Observable<FlightInfo[]> {
        return this.http.get<FlightInfo[]>(BASE_FLIGHT_URL + '?query={"isPublished":"true"}');
    }

    createFlight(payload: CreateFlight) {
        return this.http.post(BASE_FLIGHT_URL, payload);
    }

    flightDetails(flightId: string): Observable<FlightDetails> {
        return this.http.get<FlightDetails>(BASE_FLIGHT_URL + `/${flightId}`);
    }

    editFlight(flightId: string, flight: CreateFlight) {
        return this.http.put<CreateFlight>(BASE_FLIGHT_URL + `/${flightId}`, flight);
    }

    myFlights(): Observable<FlightDetails[]> {
        const userId = sessionStorage.getItem('userId');
        return this.http.get<FlightDetails[]>(BASE_FLIGHT_URL + `?query={"_acl.creator":"${userId}"}`);
    }

    removeFlight(flightId: string) {
        return this.http.delete(BASE_FLIGHT_URL + `/${flightId}`)
            .pipe(tap(() => {
                this.store.dispatch(new RemoveFlight(flightId));
            }));
    }
}