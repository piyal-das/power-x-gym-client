import { FETCH_GYM_CLASSES_ERROR, FETCH_GYM_CLASSES_LOADING, FETCH_GYM_CLASSES_SUCCESS } from "../actions/gymClassesActions";

const initialState = {
    loading: false,
    error: '',
    gymClasses: [],
}

const gymClassesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_GYM_CLASSES_LOADING:
            return { ...state, loading: true };
        case FETCH_GYM_CLASSES_SUCCESS:
            return { ...state, loading: true, error: '', gymClasses: action.gymClasses };
        case FETCH_GYM_CLASSES_ERROR:
            return { ...state, loading: false, error: action.error, gymClasses: [], };
        default:
            return state;
    }
}

export default gymClassesReducer;