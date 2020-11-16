export const FETCH_GYM_CLASSES_LOADING = 'FETCH_GYM_CLASSES_LOADING';
export const FETCH_GYM_CLASSES_SUCCESS = 'FETCH_GYM_CLASSES_SUCCESS';
export const FETCH_GYM_CLASSES_ERROR = 'FETCH_GYM_CLASSES_ERROR';

export const fetchGymClassesLoading = () => {
    return {
        type: FETCH_GYM_CLASSES_LOADING,
    }
}

export const fetchGymClassesSuccess = (gymClasses) => {
    return {
        type: FETCH_GYM_CLASSES_SUCCESS,
        gymClasses
    }
}

export const fetchGymClassesError = (error) => {
    return {
        type: FETCH_GYM_CLASSES_ERROR,
        error
    }
}

export const fetchGymClasses = () => {
    return (dispatch) => {
        dispatch(fetchGymClassesLoading);
        fetch('https://infinite-ridge-77813.herokuapp.com/classes')
        .then(res => res.json())
        .then(data => {
            const gymClasses = data;
            dispatch(fetchGymClassesSuccess(gymClasses));
        })
        .catch(err => {
            const errMessage = err.message;
            dispatch(fetchGymClassesError(errMessage));
        });
    };
}