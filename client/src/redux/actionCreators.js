import {ADD_BOOKS, ADD_USER} from "./actionTypes";
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

export const postUser = (user) => {
    return function (dispatch) {
        return fetch(baseUrl + 'auth/signup', {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "same-origin"
        }).then(response => {
                if (response.ok) {
                    sessionStorage.setItem('loggedin', true);
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
            .catch(error =>  { console.log('post user', error.message); alert('User could not be posted\nError: '+error.message); });
    }
}


export const postLogin = (user) => {
    return function (dispatch) {
        fetch(baseUrl + 'login', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.status === 200) {
                    this.props.history.push('/');
                } else {
                    const error = new Error(res.error);
                    throw error;
                }
            })
            .catch(err => {
                console.error(err);
                alert('Error logging in please try again');
            });
    }
}