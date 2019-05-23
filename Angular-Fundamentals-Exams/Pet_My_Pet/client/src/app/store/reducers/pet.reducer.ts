import { PetState } from "../states/pet.state";
import * as PetAction from '../actions/pet.action';

const initialState: PetState = {
    allPets: [],
    myPets: [],
    petDetails: null
};

function setAllPets(state: PetState, payload) {
    return Object.assign({}, state, { 
        allPets: payload
    });
}

function setMyPets(state: PetState, payload) {
    return Object.assign({}, state, { 
        myPets: payload
    });
}

function setPetDetails(state: PetState, payload) {
    return Object.assign({}, state, { 
        petDetails: payload
    });
}

function likePet(state: PetState, payload) {
    let pets = state.allPets.slice();
    let petIndex = pets.findIndex(a => a._id === payload);

    if (petIndex !== -1) {
        let pet = pets[petIndex];
        pet = Object.assign({}, pet, {
            likes: Number(pet.likes) + 1
        });
        pets[petIndex] = pet;
    }

    let details = null;
    if (state.petDetails !== null) {
        details = Object.assign({}, state.petDetails, {
            likes: Number(state.petDetails.likes) + 1
        });
    }

    return Object.assign({}, state, {
        allPets: pets,
        petDetails: details
    });
}

export function petReducer(
    state: PetState = initialState,
    action: PetAction.Type
) {
    switch (action.type) {
        case PetAction.GET_ALL_PETS:
            return setAllPets(state, action.payload);
        case PetAction.LIKE_PET:
            return likePet(state, action.payload);
        case PetAction.MY_PETS:
            return setMyPets(state, action.payload);
        case PetAction.PET_DETAILS:
            return setPetDetails(state, action.payload);
        default:
            return state;
    }
}
