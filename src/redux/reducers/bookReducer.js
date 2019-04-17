import { ADD_BOOKS } from "../actionTypes";

const initialState = {
  books: [],
  bookPreviews: [
    { id: 1, name: "Bible", author: "Irena Csaladiova" },
    { id: 2, name: "Bible", author: "Irena Csaladiova" },
    { id: 3, name: "Bible", author: "Irena Csaladiova" },
    { id: 4, name: "Bible", author: "Irena Csaladiova" },
    { id: 5, name: "Bible", author: "Irena Csaladiova" },
    { id: 6, name: "Bible", author: "Irena Csaladiova" },
    { id: 7, name: "Bible", author: "Irena Csaladiova" },
    { id: 8, name: "Bible", author: "Irena Csaladiova" },
    { id: 9, name: "Bible", author: "Irena Csaladiova" },
    { id: 10, name: "Calculus", author: "Michael Spivak" }
  ]
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
