import { RecipeInfo } from 'src/app/core/models/recipe/recipe-info.model';
import { RecipeDetails } from 'src/app/core/models/recipe/recipe-details.model';

export interface RecipeState {
    allRecipes: RecipeInfo[];
    recipeDetails: RecipeDetails;
}
