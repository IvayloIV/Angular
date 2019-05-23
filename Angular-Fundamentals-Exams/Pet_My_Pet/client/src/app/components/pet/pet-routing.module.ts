import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetsListComponent } from './pets-list/pets-list.component';
import { PetCreateComponent } from './pet-create/pet-create.component';
import { MyPetsComponent } from './my-pets/my-pets.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { PetEditComponent } from './pet-edit/pet-edit.component';
import { PetRemoveComponent } from './pet-remove/pet-remove.component';

import { AllPetsResolver } from 'src/app/core/resolvers/all-pets.resolver';
import { MyPetsResolver } from 'src/app/core/resolvers/my-pets.resolver';
import { PetDetailsResolver } from 'src/app/core/resolvers/pet-details.resolver';

const routes: Routes = [
  { path: 'all', component: PetsListComponent, resolve: { allPets: AllPetsResolver } },
  { path: 'create', component: PetCreateComponent },
  { path: 'my', component: MyPetsComponent, resolve: { myPets: MyPetsResolver } },
  { path: 'details/:id', component: PetDetailsComponent, resolve: { petDetails: PetDetailsResolver } },
  { path: 'edit/:id', component: PetEditComponent, resolve: { petDetails: PetDetailsResolver } },
  { path: 'remove/:id', component: PetRemoveComponent, resolve: { petDetails: PetDetailsResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetRoutingModule { }
