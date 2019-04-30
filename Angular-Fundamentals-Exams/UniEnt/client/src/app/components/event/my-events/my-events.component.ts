import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { Observable } from 'rxjs';
import { myEvents } from 'src/app/store/selectors/event.selector';
import { EventInfo } from 'src/app/core/models/event/event-info.model';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.scss']
})
export class MyEventsComponent implements OnInit {
  myEvents$: Observable<EventInfo[]>;
  username: string;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.username = sessionStorage.getItem('username');
    this.myEvents$ = this.store.select(myEvents);
  }

}
