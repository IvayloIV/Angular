import { Action } from '@ngrx/store';
import { PetDetails } from 'src/app/core/models/pet/pet-details';

export const GET_ALL_PETS = '[Pet] All';
export const LIKE_PET = '[Pet] Like';
export const MY_PETS = '[Pet] My';
export const PET_DETAILS = '[Pet] Details';

export class GetAllPets implements Action {
    type: string = GET_ALL_PETS;
    constructor(public payload: PetDetails[]) {}
}

export class LikePet implements Action {
    type: string = LIKE_PET;
    constructor(public payload: string) {}
}

export class GetMyPets implements Action {
    type: string = MY_PETS;
    constructor(public payload: PetDetails[]) {}
}

export class GetPetDetails implements Action {
    type: string = PET_DETAILS;
    constructor(public payload: PetDetails) {}
}

export type Type = GetAllPets | LikePet | GetMyPets | GetPetDetails;
