import { RecipeState } from "../states/recipe.state";
import * as RecipeAction from '../actions/recipe.action';

const initialState: RecipeState = {
    allRecipes: [],
    recipeDetails: null
};

function setAllRecipes(state: RecipeState, payload) {
    return Object.assign({}, state, { 
        allRecipes: payload
    });
}

function setRecipeDetails(state: RecipeState, payload) {
    return Object.assign({}, state, { 
        recipeDetails: payload
    });
}

function likeRecipe(state: RecipeState, payload) {
    let currentRecipe = state.recipeDetails;
    return Object.assign({}, state, {
        recipeDetails: Object.assign({}, currentRecipe, { likesCounter: currentRecipe.likesCounter + 1 })
    });
}

export function recipeReducer(
    state: RecipeState = initialState,
    action: RecipeAction.Type
) {
    switch (action.type) {
        case RecipeAction.GET_ALL_RECIPES:
            return setAllRecipes(state, action.payload);
        case RecipeAction.RECIPE_DETAILS:
            return setRecipeDetails(state, action.payload);
        case RecipeAction.LIKE_RECIPE:
            return likeRecipe(state, action.payload);
        default:
            return state;
    }
}
