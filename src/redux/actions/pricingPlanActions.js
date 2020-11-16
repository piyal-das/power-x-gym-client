export const FETCH_PRICING_PLAN_LOADING = 'FETCH_PRICING_PLAN_LOADING';
export const FETCH_PRICING_PLAN_SUCCESS = 'FETCH_PRICING_PLAN_SUCCESS';
export const FETCH_PRICING_PLAN_ERROR = 'FETCH_PRICING_PLAN_ERROR';

export const fetchPricingPlanLoading = () => {
    return {
        type: FETCH_PRICING_PLAN_LOADING,
    }
}

export const fetchPricingPlanSuccess = (pricingPlan) => {
    return {
        type: FETCH_PRICING_PLAN_SUCCESS,
        pricingPlan
    }
}

export const fetchPricingPlanError = (error) => {
    return {
        type: FETCH_PRICING_PLAN_ERROR,
        error
    }
}

export const fetchPricingPlan = () => {
    return (dispatch) => {
        dispatch(fetchPricingPlanLoading);
        fetch('https://infinite-ridge-77813.herokuapp.com/pricings')
        .then(res => res.json())
        .then(data => {
            const pricingPlan = data;
            dispatch(fetchPricingPlanSuccess(pricingPlan));
        })
        .catch(err => {
            const errMessage = err.message;
            dispatch(fetchPricingPlanError(errMessage));
        });
    };
}

