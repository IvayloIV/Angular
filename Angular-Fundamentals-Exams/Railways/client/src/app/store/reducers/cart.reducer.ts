import { CartState } from "../state/cart.state";
import * as CartAction from '../actions/cart.action';

const initialState: CartState = {
    cartList: []
};

function setMyCart(state: CartState, payload) {
    return Object.assign({}, state, {
        cartList: payload
    });
}

function removeFromCart(state: CartState, payload) {
    return Object.assign({}, state, {
        cartList: state.cartList.filter(a => a._id !== payload)
    });
}

export function cartReducer(
    state: CartState = initialState,
    action: CartAction.Type
) {
    switch (action.type) {
        case CartAction.GET_MY_CART:
            return setMyCart(state, action.payload);
        case CartAction.REMOVE_TICKET:
            return removeFromCart(state, action.payload);
        default:
            return state;
    }
}
