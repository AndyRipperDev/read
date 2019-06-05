import {
    ADD_BOOKS,
    CLEAR_LOGIN_ERRORS,
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    SIGNUP_FAILURE,
    SIGNUP_REQUEST
} from "./actionTypes";
import {baseUrl} from "../config";

export const requestLogin = (creds) => {
    return {
        type: LOGIN_REQUEST,
        creds
    }
};

export const requestSignup = (creds) => {
    return {
        type: SIGNUP_REQUEST,
        creds
    }
};

export const signupError = (message) => {
    return {
        type: SIGNUP_FAILURE,
        message
    }
};

export const receiveLogin = (response) => {
    return {
        type: LOGIN_SUCCESS,
        token: response.token
    }
};

export const loginError = (message) => {
    return {
        type: LOGIN_FAILURE,
        message
    }
};

export const loginClearErrors = () => {
    return {
        type: CLEAR_LOGIN_ERRORS,
    }
};

export const loginUser = (creds) => (dispatch) => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds));
    return fetch(baseUrl + 'users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(creds)
    })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                throw error;
            })
        .then(response => response.json())
        .then(response => {
            if (response.success) {
                // If login was successful, set the token in local storage
                localStorage.setItem('token', response.token);
                localStorage.setItem('creds', JSON.stringify(creds));
                // Dispatch the success action
                dispatch(receiveLogin(response));
            } else {
                var error = new Error('Error ' + response.status);
                error.response = response;
                throw error;
            }
        })
        .catch(error => dispatch(loginError(error.message)))
};

export const requestLogout = () => {
    return {
        type: LOGOUT_REQUEST
    }
};

export const receiveLogout = () => {
    return {
        type: LOGOUT_SUCCESS
    }
};

// Logs the user out
export const logoutUser = () => (dispatch) => {
    dispatch(requestLogout());
    localStorage.removeItem('token');
    localStorage.removeItem('creds');
    dispatch(receiveLogout())
};

export const signUpUser = (creds) => (dispatch) => {
    dispatch(requestSignup(creds));
    return fetch(baseUrl + 'users/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(creds)
    })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                throw error;
            })
        .then(response => response.json())
        .then(response => {
            if (response.success) {
                // If login was successful, set the token in local storage
                localStorage.setItem('token', response.token);
                localStorage.setItem('creds', JSON.stringify(creds));
                // Dispatch the success action
                dispatch(receiveLogin(response));
            } else {
                var error = new Error('Error ' + response.status);
                error.response = response;
                throw error;
            }
        })
        .catch(error => dispatch(signupError(error.message)))
};

