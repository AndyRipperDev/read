import {ADD_BOOKS, RECEIVE_MY_BOOK_PREVIEWS} from "../actionTypes";

const initialState = {
    books:  [],
    bookPreviews: []
};

function bookReducer(state = initialState, action) {
    console.log(action)
    switch (action.type) {
        case ADD_BOOKS:
            return Object.assign({}, state, {
                ...state,
                books: action.payload
            });
        case RECEIVE_MY_BOOK_PREVIEWS:
            return {...state,
                bookPreviews: action.payload
            };
        default:
            return state
    }
}

export default bookReducer;