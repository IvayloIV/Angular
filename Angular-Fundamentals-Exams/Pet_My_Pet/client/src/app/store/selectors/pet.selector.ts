import { AppState } from '../app.state';

export const allPets = (state: AppState) => state.pet.allPets;
export const myPets = (state: AppState) => state.pet.myPets;
export const petDetails = (state: AppState) => state.pet.petDetails;
