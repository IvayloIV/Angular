import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TripsListComponent } from './trips-list/trips-list.component';
import { TripsRoutingModule } from './trips-routing.module';
import { TripCardComponent } from './trip-card/trip-card.component';
import { SearchTripsComponent } from './search-trips/search-trips.component';
import { TripDetailsComponent } from './trip-details/trip-details.component';
import { SeatsListComponent } from './seats-list/seats-list.component';
import { SeatCardComponent } from './seat-card/seat-card.component';
import { MyTripsComponent } from './my-trips/my-trips.component';
import { MyTripsCardComponent } from './my-trips-card/my-trips-card.component';

@NgModule({
  declarations: [
    TripsListComponent, 
    TripCardComponent, 
    SearchTripsComponent, 
    TripDetailsComponent, 
    SeatsListComponent, 
    SeatCardComponent, 
    MyTripsComponent, 
    MyTripsCardComponent
  ],
  imports: [
    CommonModule,
    TripsRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class TripsModule { }
