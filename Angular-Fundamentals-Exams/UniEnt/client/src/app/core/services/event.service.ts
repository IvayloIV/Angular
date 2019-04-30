import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { EventInfo } from '../models/event/event-info.model';
import { EventDetails } from '../models/event/event-details.model';
import { ChangeEvent } from '../models/event/change-event.model';
import { JoinEvent } from 'src/app/store/actions/event.action';

const BASE_URL = 'https://baas.kinvey.com/';
const APP_KEY = 'kid_Hk_8_pVjN';
const EVENT_URL = BASE_URL + 'appdata/' + APP_KEY + '/events';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(
    private http: HttpClient,
    private store: Store<AppState>
  ) { }

  getAllEvents(): Observable<EventInfo[]> {
    return this.http.get<EventInfo[]>(EVENT_URL);
  }

  getEventDetails(id: string): Observable<EventDetails>  {
    return this.http.get<EventDetails>(EVENT_URL + `/${id}`);
  }

  getMyEvents(): Observable<EventInfo[]>  {
    const userId = sessionStorage.getItem('userId');
    return this.http.get<EventInfo[]>(EVENT_URL + `?query={"_acl.creator":"${userId}"}`);
  }

  createEvent(payload: ChangeEvent) {
    return this.http.post(EVENT_URL, payload);
  }

  editEvent(eventId: string, payload: ChangeEvent) {
    return this.http.put(EVENT_URL + `/${eventId}`, payload);
  }

  removeEvent(eventId: string) {
    return this.http.delete(EVENT_URL + `/${eventId}`);
  }

  joinEvent(eventId: string, payload: ChangeEvent) {
    return this.http.put(EVENT_URL + `/${eventId}`, payload)
      .pipe(tap((data: EventDetails) => {
        this.store.dispatch(new JoinEvent(data));
      }));
  }
}