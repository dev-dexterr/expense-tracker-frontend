import { SET_USER_NAME, SET_TOKEN, SET_EMAIL, SET_ROUTENAME, SET_USER_ID, SET_TRANSACTION } from './actions.js';

import { getterToken } from "../../utils/auth.js";

const initialState = {
    username: '',
    token: '',
    email: '',
    route: '',
    userId: '',
    transaction: []
};

getterToken().then(res => initialState.token = res);

function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_NAME:
            return { ...state, username: action.payload };
        case SET_TOKEN:
            return { ...state, token: action.payload };
        case SET_EMAIL:
            return { ...state, email: action.payload };
        case SET_ROUTENAME:
            return { ...state, route: action.payload };
        case SET_USER_ID:
            return { ...state, userId: action.payload };
        case SET_TRANSACTION:
            return { ...state, transaction: action.payload };
        default:
            return state;
    }
}

export default userReducer;