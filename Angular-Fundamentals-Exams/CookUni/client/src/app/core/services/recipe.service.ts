import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppState } from 'src/app/store/app.state';
import { LikeRecipe } from 'src/app/store/actions/recipe.action';

import { RecipeDetails } from '../models/recipe/recipe-details.model';
import { RecipeInfo } from '../models/recipe/recipe-info.model';
import { RecipeCreate } from '../models/recipe/recipe-create.model';

const BASE_URL = 'https://baas.kinvey.com/';
const APP_KEY = 'kid_r1MHI2YoE';
const RECIPE_URL = BASE_URL + 'appdata/' + APP_KEY + '/recipes';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor(
    private http: HttpClient,
    private store: Store<AppState>
  ) { }

  getAllRecipes(): Observable<RecipeInfo[]> {
    return this.http.get<RecipeInfo[]>(RECIPE_URL);
  }

  createRecipe(payload: RecipeCreate) {
    return this.http.post(RECIPE_URL, payload);
  }

  recipeDetails(recipeId: string) {
    return this.http.get(RECIPE_URL + `/${recipeId}`);
  }

  editRecipe(recipeId: string, payload: RecipeCreate) {
    return this.http.put(RECIPE_URL + `/${recipeId}`, payload);
  }

  likeRecipe(recipeId: string, payload: RecipeDetails) {
    return this.http.put(RECIPE_URL + `/${recipeId}`, Object.assign({}, payload, {
      likesCounter: payload.likesCounter + 1
    })).pipe(tap(() => {
      this.store.dispatch(new LikeRecipe(recipeId));
    }));
  }

  removeRecipe(recipeId: string) {
    return this.http.delete(RECIPE_URL + `/${recipeId}`);
  }
}
