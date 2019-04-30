import { EventInfo } from 'src/app/core/models/event/event-info.model';
import { EventDetails } from 'src/app/core/models/event/event-details.model';

export interface EventState {
    allEvents: EventInfo[];
    eventDetails: EventDetails;
    myEvents: EventInfo[];
}
