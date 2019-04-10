import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelRoutingModule } from './hotel-routing.module';
import { HotelCreateComponent } from './hotel-create/hotel-create.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { HotelDetailsResolver } from 'src/app/core/resolvers/hotel-details.resolver';
import { ReviewModule } from '../review/review.module';

@NgModule({
  declarations: [HotelListComponent, HotelCreateComponent, HotelDetailsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HotelRoutingModule,
    ReviewModule
  ],
  providers: [
    HotelDetailsResolver
  ]
})
export class HotelModule { }
