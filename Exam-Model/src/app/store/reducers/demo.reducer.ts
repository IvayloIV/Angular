// import { BurgerState } from "../states/burger.state";
// import * as BurgerAction from '../actions/demo.action';

// const initialState: BurgerState = {
//     topBurgers: null,
// };

// function setTopBurgers(state: BurgerState, payload) {
//     return Object.assign({}, state, { 
//         topBurgers: payload
//     });
// }

// export function burgerReducer(
//     state: BurgerState = initialState,
//     action: BurgerAction.Type
// ) {
//     switch (action.type) {
//         case BurgerAction.GET_TOP_BURGERS:
//             return setTopBurgers(state, action.payload);
//         default:
//             return state;
//     }
// }
