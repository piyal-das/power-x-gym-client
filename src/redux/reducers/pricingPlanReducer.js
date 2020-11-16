const { FETCH_PRICING_PLAN_LOADING, FETCH_PRICING_PLAN_SUCCESS, FETCH_PRICING_PLAN_ERROR } = require("../actions/pricingPlanActions");

const initialState = {
    loading: false,
    error: '',
    pricingPlan: [],
}

const pricingPlanReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRICING_PLAN_LOADING:
            return { ...state, loading: true };
        case FETCH_PRICING_PLAN_SUCCESS:
            return { ...state, loading: true, error: '', pricingPlan: action.pricingPlan };
        case FETCH_PRICING_PLAN_ERROR:
            return { ...state, loading: false, error: action.error, pricingPlan: [], };
        default:
            return state;
    }
}

export default pricingPlanReducer;