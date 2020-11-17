const { FETCH_PRICING_PLAN_LOADING, FETCH_PRICING_PLAN_SUCCESS, FETCH_PRICING_PLAN_ERROR, ADD_PRICING_PLAN } = require("../actions/pricingPlanActions");

const initialState = {
    loading: false,
    error: '',
    pricingPlan: [],
    addedPricingPlan: {}
}

const pricingPlanReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRICING_PLAN_LOADING:
            return { ...state, loading: true };
        case FETCH_PRICING_PLAN_SUCCESS:
            return { ...state, loading: true, error: '', pricingPlan: action.pricingPlan };
        case FETCH_PRICING_PLAN_ERROR:
            return { ...state, loading: false, error: action.error, pricingPlan: [], };
        case ADD_PRICING_PLAN:
            return { ...state, addedPricingPlan: action.info}
        default:
            return state;
    }
}

export default pricingPlanReducer;