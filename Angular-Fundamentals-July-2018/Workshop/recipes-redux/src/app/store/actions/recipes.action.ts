import { Action } from '@ngrx/store';
import { IDetailsRecipe } from 'src/app/core/contracts/IDetailsRecipe';

export const GET_ALL_RECIPES = '[RECIPE] Get all';
export const GET_RECIPE_DETAILS = '[RECIPE] Get details';
export const GET_RECIPE_TO_EDIT = '[RECIPE] Get edit';

export class GetAllRecipes implements Action {
    type: string = GET_ALL_RECIPES;
    constructor(public payload: IDetailsRecipe[]) {}
}

export class GetRecipeDetails implements Action {
    type: string = GET_RECIPE_DETAILS;
    constructor(public payload: IDetailsRecipe) {}
}

export class GetRecipeToEdit implements Action {
    type: string = GET_RECIPE_TO_EDIT;
    constructor(public payload: IDetailsRecipe) {}
}

export type Type = GetAllRecipes | GetRecipeDetails | GetRecipeToEdit;
