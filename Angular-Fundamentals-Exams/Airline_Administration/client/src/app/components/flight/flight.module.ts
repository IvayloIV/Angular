import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FlightRoutingModule } from './flight-routing.module';
import { flightComponents } from './index';

import { FlightDetailsResolver } from 'src/app/core/resolvers/flight-details.resolver';
import { PublishedFlightsResolver } from 'src/app/core/resolvers/published-flights.resolver';
import { MyFlightsResolver } from 'src/app/core/resolvers/my-flights.resolver';

@NgModule({
  declarations: [
    ...flightComponents
  ],
  imports: [
    CommonModule,
    FlightRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    PublishedFlightsResolver,
    FlightDetailsResolver,
    MyFlightsResolver
  ]
})
export class FlightModule { }
