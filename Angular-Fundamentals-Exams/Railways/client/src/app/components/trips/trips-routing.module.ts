import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TripsListComponent } from './trips-list/trips-list.component';
import { TripDetailsComponent } from './trip-details/trip-details.component';
import { UserGuard } from 'src/app/core/guards/user.guard';
import { MyTripsComponent } from './my-trips/my-trips.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: TripsListComponent },
  { path: 'details/:id', component: TripDetailsComponent, canActivate: [UserGuard] },
  { path: 'my', component: MyTripsComponent, canActivate: [UserGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TripsRoutingModule { }
