import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeRoutingModule } from './recipe-routing.module';
import { recipeComponents } from './index';

import { RecipeAllResolver } from 'src/app/core/resolvers/recipe-all.resolver';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipeDetailsResolver } from 'src/app/core/resolvers/recipe-details.resolver';

@NgModule({
  declarations: [
    ...recipeComponents
  ],
  imports: [
    CommonModule,
    RecipeRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    RecipeAllResolver,
    RecipeDetailsResolver
  ]
})
export class RecipeModule { }
