import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { UserGuard } from './core/guards/user.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'flight' },
  { path: 'auth', loadChildren: "./components/auth/auth.module#AuthModule", canLoad: [AuthGuard] },
  { path: 'flight', loadChildren: "./components/flight/flight.module#FlightModule", canLoad: [UserGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
