import { FETCH_COUNTRIES_ERROR, FETCH_COUNTRIES_LOADING, FETCH_COUNTRIES_SUCCESS } from "../actions/fetchCountriesActions";

const initialState = {
    loading: false,
    error: '',
    countries: [],
}

const countryReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COUNTRIES_LOADING:
            return { ...state, loading: true };
        case FETCH_COUNTRIES_SUCCESS:
            return { ...state, loading: true, error: '', countries: action.countries };
        case FETCH_COUNTRIES_ERROR:
            return { ...state, loading: false, error: action.error, countries: [], };
        default:
            return state;
    }
}

export default countryReducer;