export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_TOKEN = 'SET_TOKEN';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_ROUTENAME = 'SET_ROUTENAME';
export const SET_USER_ID = 'SET_USER_ID';
export const SET_TRANSACTION_ID = 'SET_TRANSACTION_ID';
export const SET_TRANSACTION = 'SET_TRANSACTION';

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

export const setID = userId => dispatch => {
    dispatch({
        type: SET_USER_ID,
        payload: userId
    })
}

export const setTID = transactionId => dispatch => {
    dispatch({
        type: SET_TRANSACTION_ID,
        payload: transactionId
    })
}

export const setTransaction = transaction => dispatch => {
    dispatch({
        type: SET_TRANSACTION,
        payload: transaction
    })
}

