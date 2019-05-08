import {ADD_BOOKS} from "../actionTypes";

const initialState = {
    books:  []
};

function bookReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_BOOKS:
            return Object.assign({}, state, {
                ...state,
                books: state.books.concat(action.payload)
            });
        default:
            return state
    }
}

export default bookReducer;