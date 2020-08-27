import { Dispatch } from 'redux';

export enum actionTypes {
    ADD_TO_CART = "ADD_TO_CART",
    REMOVE_FROM_CART = "REMOVE_FROM_CART",
}

export const dispatchToAction = (type: string, payload: any) => async (dispatch: Dispatch) => {
    dispatch({ type, payload })
}


