import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllEventsComponent } from './all-events/all-events.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { MyEventsComponent } from './my-events/my-events.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { EditEventComponent } from './edit-event/edit-event.component';

import { AllEventsResolver } from 'src/app/core/resolvers/all-events.resolver';
import { EventDetailsResolver } from 'src/app/core/resolvers/event-details.resolver';
import { MyEventsResolver } from 'src/app/core/resolvers/my-events.resolver';

const routes: Routes = [
  { path: 'all', component: AllEventsComponent, resolve: { allEvents: AllEventsResolver } },
  { path: 'details/:id', component: EventDetailsComponent, resolve: { detailsEvent: EventDetailsResolver } },
  { path: 'my', component: MyEventsComponent, resolve: { myEvents: MyEventsResolver } },
  { path: 'create', component: CreateEventComponent },
  { path: 'edit/:id', component: EditEventComponent, resolve: { detailsEvent: EventDetailsResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
