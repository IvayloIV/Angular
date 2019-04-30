import { Component, Input } from '@angular/core';
import { EventInfo } from 'src/app/core/models/event/event-info.model';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent {
  @Input() event: EventInfo;
}
