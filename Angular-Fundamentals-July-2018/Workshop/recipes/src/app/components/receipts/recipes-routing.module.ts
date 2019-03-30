import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeCreateComponent } from './recipe-create/recipe-create.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';

import { GetAllResolver } from 'src/app/core/resolvers/recipes/get-all.resolver';
import { GetDetailsResolver } from 'src/app/core/resolvers/recipes/get-details.resolver';

const routes: Routes = [
    { path: 'list', component: RecipesListComponent, resolve: { getAll: GetAllResolver } },
    { path: 'create', component: RecipeCreateComponent },
    { path: 'details/:id', component: RecipeDetailsComponent, resolve: { getDetails: GetDetailsResolver } },
    { path: 'edit/:id', component: RecipeEditComponent, resolve: { getDetails: GetDetailsResolver } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
