export const FETCH_COUNTRIES_LOADING = 'FETCH_COUNTRIES_LOADING';
export const FETCH_COUNTRIES_SUCCESS = 'FETCH_COUNTRIES_SUCCESS';
export const FETCH_COUNTRIES_ERROR = 'FETCH_COUNTRIES_ERROR';

export const fetchCountriesLoading = () => {
    return {
        type: FETCH_COUNTRIES_LOADING,
    }
}

export const fetchCountriesSuccess = (countries) => {
    return {
        type: FETCH_COUNTRIES_SUCCESS,
        countries
    }
}

export const fetchCountriesError = (error) => {
    return {
        type: FETCH_COUNTRIES_ERROR,
        error
    }
}

export const fetchCountries = () => {
    return (dispatch) => {
        dispatch(fetchCountriesLoading);
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => {
            const countries = data;
            dispatch(fetchCountriesSuccess(countries));
        })
        .catch(err => {
            const errMessage = err.message;
            dispatch(fetchCountriesError(errMessage));
        });
    };
}