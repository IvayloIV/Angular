export interface RecipeCreate {
    meal: string;
    ingredients: string[];
    prepMethod: string;
    description: string;
    category: string;
    foodImageURL: string;
    categoryImageURL: string;
    likesCounter: number;
}