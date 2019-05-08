import {ADD_BOOKS} from "./actionTypes";

export const addBooks = (books) => ({
    type: ADD_BOOKS,
    payload: books
});