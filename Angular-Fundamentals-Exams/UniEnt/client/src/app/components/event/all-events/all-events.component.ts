import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { allEvents } from 'src/app/store/selectors/event.selector';
import { EventInfo } from 'src/app/core/models/event/event-info.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.scss']
})
export class AllEventsComponent implements OnInit {
  events$: Observable<EventInfo[]>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.events$ = this.store.select(allEvents);
  }

}
