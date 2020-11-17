export const ADD_USER_DETAIL = 'ADD_USER_DETAIL';
export const ADD_BANK_DETAIL = 'ADD_BANK_DETAIL';
export const ADD_USER = 'ADD_USER';

export const addUserDetail = (userDetail) => {
    return {
        type: ADD_USER_DETAIL,
        userDetail
    }
}

export const addBankDetail = (bankDetail) => {
    return {
        type: ADD_BANK_DETAIL,
        bankDetail
    }
}
