import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PetRoutingModule } from './pet-routing.module';

import { FilterPetsPipe } from '../shared/pipes/filter-pets.pipe';
import { petComponents } from './index';

import { MyPetsResolver } from 'src/app/core/resolvers/my-pets.resolver';
import { PetDetailsResolver } from 'src/app/core/resolvers/pet-details.resolver';
import { AllPetsResolver } from 'src/app/core/resolvers/all-pets.resolver';

@NgModule({
  declarations: [
    ...petComponents,
    FilterPetsPipe
  ],
  imports: [
    CommonModule,
    PetRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    AllPetsResolver,
    MyPetsResolver,
    PetDetailsResolver
  ]
})
export class PetModule { }
