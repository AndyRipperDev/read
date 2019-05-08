import {ADD_BOOKS} from "./actionTypes";
import {baseUrl} from "../config";

export const addBooks = (books) => ({
    type: ADD_BOOKS,
    payload: books
});

export const postBooks = (books) => {
    return function (dispatch) {
        return fetch(baseUrl + 'comments', {
            method: "POST",
            body: JSON.stringify(books),
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "same-origin"
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
            .then(response => dispatch(addBooks(response)))
            .catch(error =>  { console.log('post books', error.message); alert('Your books could not be posted\nError: '+error.message); });
    }
}