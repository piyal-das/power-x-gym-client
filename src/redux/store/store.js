import homeReducer from "../reducers/homepageReducer";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import gymDetailReducer from "../reducers/gymDetailReducer";
import thunk from 'redux-thunk';
import pricingPlanReducer from "../reducers/pricingPlanReducer";
import gymClassesReducer from "../reducers/gymClassesReducer";

export const store = createStore(
    combineReducers({    
        home: homeReducer,
        gymDetail: gymDetailReducer,
        pricing: pricingPlanReducer,
        classes: gymClassesReducer,
    }), 
    applyMiddleware(thunk),
);