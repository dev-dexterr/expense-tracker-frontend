export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_TOKEN = 'SET_TOKEN';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_ROUTENAME = 'SET_ROUTENAME';

export const setUsername = username => dispatch => {
    dispatch({
        type: SET_USER_NAME,
        payload: username
    });
};

export const setToken = token => dispatch => {
    dispatch({
        type: SET_TOKEN,
        payload: token
    });
};

export const setEmail = email => dispatch => {
    dispatch({
        type: SET_EMAIL,
        payload: email
    })
}

export const setRoute = route => dispatch => {
    dispatch({
        type: SET_ROUTENAME,
        payload: route
    })
}

