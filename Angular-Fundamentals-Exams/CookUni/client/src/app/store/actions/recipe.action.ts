import { Action } from '@ngrx/store';
import { RecipeInfo } from 'src/app/core/models/recipe/recipe-info.model';
import { RecipeDetails } from 'src/app/core/models/recipe/recipe-details.model';

export const GET_ALL_RECIPES = '[RECIPE] All';
export const RECIPE_DETAILS = '[RECIPE] Details';
export const LIKE_RECIPE = '[RECIPE] Like';

export class GetAllRecipes implements Action {
    type: string = GET_ALL_RECIPES;
    constructor(public payload: RecipeInfo[]) {}
}

export class GetRecipeDetails implements Action {
    type: string = RECIPE_DETAILS;
    constructor(public payload: RecipeDetails) {}
}

export class LikeRecipe implements Action {
    type: string = LIKE_RECIPE;
    constructor(public payload: string) {}
}

export type Type = GetAllRecipes | GetRecipeDetails | LikeRecipe;
