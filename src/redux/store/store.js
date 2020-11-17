import homeReducer from "../reducers/homepageReducer";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import gymDetailReducer from "../reducers/gymDetailReducer";
import thunk from 'redux-thunk';
import pricingPlanReducer from "../reducers/pricingPlanReducer";
import gymClassesReducer from "../reducers/gymClassesReducer";
import membershipReducer from "../reducers/membershipReducer";
import countryReducer from "../reducers/countryReducer";

export const store = createStore(
    combineReducers({    
        home: homeReducer,
        gymDetail: gymDetailReducer,
        pricing: pricingPlanReducer,
        classes: gymClassesReducer,
        membership: membershipReducer,
        countries: countryReducer,
    }), 
    applyMiddleware(thunk),
);