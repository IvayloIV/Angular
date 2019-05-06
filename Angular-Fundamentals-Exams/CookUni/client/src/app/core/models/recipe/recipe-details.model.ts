export interface RecipeDetails {
    _id: string;
    meal: string;
    ingredients: string[];
    prepMethod: string;
    description: string;
    category: string;
    foodImageURL: string;
    categoryImageURL: string;
    likesCounter: number;
    _acl: {
        creator: string;
    }
}