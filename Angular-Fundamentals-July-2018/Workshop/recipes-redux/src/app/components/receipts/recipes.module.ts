import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { recipesComponents } from './index';
import { RecipesService } from 'src/app/core/services/recipes.service';
import { RecipesRoutingModule } from './recipes-routing.module';

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
  providers: [RecipesService]
})
export class RecipesModule { }
