import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelCreateComponent } from './hotel-create/hotel-create.component';
import { UserGuard } from 'src/app/core/guards/user.guard';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { HotelDetailsResolver } from 'src/app/core/resolvers/hotel-details.resolver';

const routes: Routes = [
  { path: 'list', component: HotelListComponent },
  { path: 'create', component: HotelCreateComponent, canActivate: [UserGuard] },
  { path: 'details/:id', 
    component: HotelDetailsComponent, 
    canActivate: [UserGuard], 
    resolve: { 
        hotelDetails: HotelDetailsResolver 
    } 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelRoutingModule { }
