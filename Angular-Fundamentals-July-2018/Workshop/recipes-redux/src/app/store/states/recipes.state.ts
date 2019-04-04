import { IDetailsRecipe } from '../../core/contracts/IDetailsRecipe';

export interface RecipesState {
    all: IDetailsRecipe[],
    details: IDetailsRecipe,
    edit: IDetailsRecipe
}
