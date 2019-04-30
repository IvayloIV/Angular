import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EventRoutingModule } from './event-routing.module';
import { AllEventsResolver } from 'src/app/core/resolvers/all-events.resolver';
import { EventDetailsResolver } from 'src/app/core/resolvers/event-details.resolver';
import { MyEventsResolver } from 'src/app/core/resolvers/my-events.resolver';
import { SortEventsPipe } from '../shared/pipes/sort-events.pipe';
import { eventComponents } from './index';

@NgModule({
  declarations: [
    ...eventComponents,
    SortEventsPipe
  ],
  imports: [
    CommonModule,
    EventRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    AllEventsResolver,
    EventDetailsResolver,
    MyEventsResolver
  ]
})
export class EventModule { }
