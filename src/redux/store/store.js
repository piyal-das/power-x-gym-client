import homeReducer from "../reducers/homepageReducer";
import { createStore, combineReducers } from 'redux';
import gymDetailReducer from "../reducers/gymDetailReducer";

export const store = createStore(combineReducers({ 
    home: homeReducer,
    gymDetail: gymDetailReducer
}));