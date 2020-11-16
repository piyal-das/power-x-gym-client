const { ADD_CLASS_DETAIL } = require("../actions/gymDetailActions");

const initialState = {
    gymDetails: {},
};

const gymDetailReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_CLASS_DETAIL:
            return { ...state, gymDetails: action.info};
        default: 
            return state;
    }
}

export default gymDetailReducer;