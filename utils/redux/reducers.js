import { SET_USER_NAME , SET_TOKEN, SET_EMAIL } from './actions.js';

const initialState = {
    username: '',
    token: '',
    email: ''
}

function userReducer(state = initialState, action){
    switch(action.type){
        case SET_USER_NAME:
            return {...state, username: action.payload};
        case SET_TOKEN: 
            return {...state, token: action.payload};
        case SET_EMAIL: 
            return {...state, email: action.payload};
        default: 
            return state;
    }
}

export default userReducer;