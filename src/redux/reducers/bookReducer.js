import { ADD_BOOKS } from "../actionTypes";

const initialState = {
  books: [],
  bookPreviews: [{ id: 1, name: "fetuju lepidlo", author: "Irena Csaladiova" }]
};

function bookReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case ADD_BOOKS:
      return Object.assign({}, state, {
        ...state,
        books: state.books.concat(action.payload)
      });
    default:
      return state;
  }
}

export default bookReducer;
