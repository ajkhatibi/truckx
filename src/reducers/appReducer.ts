import { Data } from '../../data';
import { actionTypes } from '../actions';

export interface STATE {
    cart: Data[]
}

type ACTIONS = { type: actionTypes.ADD_TO_CART, payload: Data } | { type: actionTypes.REMOVE_FROM_CART, payload: number };

const INITIAL_STATE: STATE = {
    cart: []
}



export default (state = INITIAL_STATE, action: ACTIONS) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            return { ...state, cart: [...state.cart, action.payload] }
        case actionTypes.REMOVE_FROM_CART:
            const newArray = state.cart.filter((item, index) => index !== action.payload);
            return { ...state, cart: newArray }
        default:
            return state;
    }
}