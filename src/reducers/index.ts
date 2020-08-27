import { combineReducers } from 'redux';
import appReducer, { STATE } from './appReducer';

export interface STORE {
    appReducer: STATE
}

export default combineReducers<STORE>({
    appReducer
})