import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FurnitureAllComponent } from './furniture-all/furniture-all.component';
import { CreateFurnitureComponent } from './create-furniture/create-furniture.component';
import { FurnitureDetailsComponent } from './furniture-details/furniture-details.component';
import { FurnitureUserComponent } from './furniture-user/furniture-user.component';
import { EditFurnitureComponent } from './edit-furniture/edit-furniture.component';
import { AdminGuard } from '../guards/admin.guard';

import { DetailsFurnitureResolver } from '../resolvers/details-furniture.resolver';
import { UserFurnitureResolver } from '../resolvers/user-furniture.resolver';
import { AllFurnitureResolver } from '../resolvers/all-furniture.resolver';

const routes: Routes = [
  { 
    path: 'all', component: FurnitureAllComponent,
    resolve: { allFurniture: AllFurnitureResolver }
  },
  { path: 'create', component: CreateFurnitureComponent },
  { 
    path: 'details/:id', 
    component: FurnitureDetailsComponent, 
    resolve: { details: DetailsFurnitureResolver }
  },
  { 
    path: 'user', component: FurnitureUserComponent,
    resolve: { userFurniture: UserFurnitureResolver }
  },
  {
    path: 'edit/:id', 
    component: EditFurnitureComponent, 
    canActivate: [AdminGuard],
    resolve: { details: DetailsFurnitureResolver }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FurnitureRoutingModule { }