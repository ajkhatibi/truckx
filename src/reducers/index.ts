import { combineReducers } from 'redux';
import userReducer, { STATE } from './userReducer';

export interface STORE {
    user: STATE
}

export default combineReducers<STORE>({
    user: userReducer
})