import {
    ADD_BOOKS,
    ADD_USER,
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS
} from "./actionTypes";
import {baseUrl} from "../config";

export const addBooks = (books) => ({
    type: ADD_BOOKS,
    payload: books
});

export const postBooks = (books) => {
    return function (dispatch) {
        return fetch(baseUrl + 'books', {
            method: "POST",
            body: JSON.stringify(books),
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "same-origin"
        }).then(response => {
                console.log(response)
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
            .then(response => dispatch(addBooks(response)))
            .catch(error =>  { console.log('post books', error.message); alert('Your books could not be posted\nError: '+error.message); });
    }
}

export const requestLogin = (creds) => {
    return {
        type: LOGIN_REQUEST,
        creds
    }
}

export const receiveLogin = (response) => {
    return {
        type: LOGIN_SUCCESS,
        token: response.token
    }
}

export const loginError = (message) => {
    return {
        type: LOGIN_FAILURE,
        message
    }
}

export const loginUser = (creds) => (dispatch) => {
    // We dispatch requestLogin to kickoff the call to the API
    console.log(baseUrl + 'users/login')
    dispatch(requestLogin(creds))
    return fetch(baseUrl + 'users/login', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(creds)
    })
        .then(response => {
            console.log(response)
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
            }
            else {
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
}

export const receiveLogout = () => {
    return {
        type: LOGOUT_SUCCESS
    }
}

// Logs the user out
export const logoutUser = () => (dispatch) => {
    dispatch(requestLogout())
    localStorage.removeItem('token');
    localStorage.removeItem('creds');
    dispatch(receiveLogout())
}