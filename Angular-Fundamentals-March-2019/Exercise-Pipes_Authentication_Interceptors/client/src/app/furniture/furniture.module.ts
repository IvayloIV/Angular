import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateFurnitureComponent } from './create-furniture/create-furniture.component';
import { FurnitureRoutingModule } from './furniture-routing.module';
import { FurnitureService } from './furniture.service';
import { FurnitureAllComponent } from './furniture-all/furniture-all.component';
import { FurnitureDetailsComponent } from './furniture-details/furniture-details.component';
import { FurnitureUserComponent } from './furniture-user/furniture-user.component';
import { EditFurnitureComponent } from './edit-furniture/edit-furniture.component';
import { DetailsFurnitureResolver } from '../resolvers/details-furniture.resolver';
import { UserFurnitureResolver } from '../resolvers/user-furniture.resolver';
import { AllFurnitureResolver } from '../resolvers/all-furniture.resolver';

@NgModule({
  imports: [
    CommonModule,
    FurnitureRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    CreateFurnitureComponent,
    FurnitureAllComponent,
    FurnitureDetailsComponent,
    FurnitureUserComponent,
    EditFurnitureComponent
  ],
  providers: [
    FurnitureService,
    DetailsFurnitureResolver,
    UserFurnitureResolver,
    AllFurnitureResolver
  ]
})
export class FurnitureModule { }
