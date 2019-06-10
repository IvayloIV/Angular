import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllFlightsComponent } from './all-flights/all-flights.component';
import { CreateFlightComponent } from './create-flight/create-flight.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { EditFlightComponent } from './edit-flight/edit-flight.component';
import { MyFlightsComponent } from './my-flights/my-flights.component';

import { PublishedFlightsResolver } from 'src/app/core/resolvers/published-flights.resolver';
import { FlightDetailsResolver } from 'src/app/core/resolvers/flight-details.resolver';
import { MyFlightsResolver } from 'src/app/core/resolvers/my-flights.resolver';

const routes: Routes = [
  { path: '', component: AllFlightsComponent, resolve: { allFlights: PublishedFlightsResolver } },
  { path: 'create', component: CreateFlightComponent },
  { path: 'details/:id', component: FlightDetailsComponent, resolve: { flightDetails: FlightDetailsResolver } },
  { path: 'edit/:id', component: EditFlightComponent, resolve: { flightDetails: FlightDetailsResolver } },
  { path: 'my', component: MyFlightsComponent, resolve: { myFlights: MyFlightsResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightRoutingModule { }
