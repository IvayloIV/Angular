import { RecipesState } from '../states/recipes.state';
import * as RecipesAction from '../actions/recipes.action';

const initialState: RecipesState = {
    all: [],
    details: null,
    edit: null
}

function getAllRecipes(state: RecipesState, payload) {
    return Object.assign({}, state, {
        all: payload
    });
}

function getRecipeDetails(state: RecipesState, payload) {
    return Object.assign({}, state, {
        details: payload
    });
}

function getRecipeToEdit(state: RecipesState, payload) {
    return Object.assign({}, state, {
        edit: payload
    });
}

export function recipesReducer(
    state: RecipesState = initialState, 
    action: RecipesAction.Type) {
    switch (action.type) {
        case RecipesAction.GET_ALL_RECIPES:
            return getAllRecipes(state, action.payload);
        case RecipesAction.GET_RECIPE_DETAILS:
            return getRecipeDetails(state, action.payload);
        case RecipesAction.GET_RECIPE_TO_EDIT:
            return getRecipeToEdit(state, action.payload);
        default:
            return state;
    }
}
