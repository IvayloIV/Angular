import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { eventDetails } from 'src/app/store/selectors/event.selector';
import { EventDetails } from 'src/app/core/models/event/event-details.model';
import { EventService } from 'src/app/core/services/event.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  events$: Observable<EventDetails>;
  userId: string;

  constructor(
    private store: Store<AppState>,
    private eventService: EventService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.userId = sessionStorage.getItem('userId');
    this.events$ = this.store.select(eventDetails);
  }

  removeEvent(id: string) {
    this.eventService.removeEvent(id).subscribe(() => {
      this.toastr.success('Event closed successfully.');
      this.router.navigate(['/event/all']);
    });
  }

  joinEvent(event: EventDetails) {
    const id = this.route.snapshot.params['id'];
    const payload = Object.assign({}, event, { peopleInterestedIn: event.peopleInterestedIn + 1 });
    this.eventService.joinEvent(id, payload).subscribe(() => {
      this.toastr.success('You join the event successfully.');
    });
  }
}
