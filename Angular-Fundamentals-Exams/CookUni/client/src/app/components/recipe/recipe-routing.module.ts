import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeAllComponent } from './recipe-all/recipe-all.component';
import { RecipeCreateComponent } from './recipe-create/recipe-create.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';

import { RecipeAllResolver } from 'src/app/core/resolvers/recipe-all.resolver';
import { RecipeDetailsResolver } from 'src/app/core/resolvers/recipe-details.resolver';

const routes: Routes = [
  { path: 'all', component: RecipeAllComponent, resolve: { allRecipes: RecipeAllResolver } },
  { path: 'create', component: RecipeCreateComponent },
  { path: 'details/:id', component: RecipeDetailsComponent, resolve: { detailsRecipe: RecipeDetailsResolver } },
  { path: 'edit/:id', component: RecipeEditComponent, resolve: { detailsRecipe: RecipeDetailsResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule { }
