import { ADD_BANK_DETAIL, ADD_USER_DETAIL } from "../actions/membershipActions";

const initialState = {
    userDetail: {},
    bankDetail: {},
}

const membershipReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER_DETAIL:
            return { ...state, userDetail: action.userDetail };
        case ADD_BANK_DETAIL:
            return { ...state, bankDetail: action.bankDetail };
        default:
            return state;
    }
}

export default membershipReducer;