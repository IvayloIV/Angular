import { PetDetails } from 'src/app/core/models/pet/pet-details';

export interface PetState {
    allPets: PetDetails[];
    myPets: PetDetails[];
    petDetails: PetDetails;
}
