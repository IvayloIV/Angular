import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { recipesComponents } from './index';
import { RecipesService } from 'src/app/core/services/recipes.service';
import { RecipesRoutingModule } from './recipes-routing.module';
import { GetAllResolver } from 'src/app/core/resolvers/recipes/get-all.resolver';
import { GetDetailsResolver } from 'src/app/core/resolvers/recipes/get-details.resolver';

@NgModule({
  declarations: [
    ...recipesComponents
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RecipesRoutingModule
  ],
  providers: [
    RecipesService,
    GetAllResolver,
    GetDetailsResolver
  ]
})
export class RecipesModule { }
