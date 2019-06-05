import {ADD_BOOKS, RECEIVE_MY_BOOK_PREVIEWS} from "./actionTypes";
import {baseUrl} from "../config";

export const receiveMyBookPreviews = (bookPreviews) => ({
    type: RECEIVE_MY_BOOK_PREVIEWS,
    payload: bookPreviews
});

export const fetchMyBookPreviews = () => (dispatch) => {
    {
        const bearer = 'Bearer ' + localStorage.getItem('token');
        return fetch(baseUrl + 'myBooks', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': bearer
            },
        }).then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }).then(response => response.json())
            .then(response => dispatch(receiveMyBookPreviews(response)))
            .catch(error => {
                alert('Your books could not be posted\nError: ' + error.message);
            });
    }
};



export const addMyBooks = (books) => ({
    type: ADD_BOOKS,
    payload: books
});

export const postMyBooks = (books) => (dispatch) => {
        const bearer = 'Bearer ' + localStorage.getItem('token');
        return fetch(baseUrl + 'myBooks', {
            method: "POST",
            body: JSON.stringify(books),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': bearer
            },
        }).then(response => {
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
            .then(response => dispatch(addMyBooks(response)))
            .catch(error => {
                alert('Your books could not be posted\nError: ' + error.message);
            });

};