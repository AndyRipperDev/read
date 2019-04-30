import React from 'react';
import './semantic/dist/semantic.min.css'
import {createStore} from 'redux'
import bookReducer from "./redux/reducers/bookReducer";
import {Provider} from "react-redux";
import BookUploadComponent from "./components/BookUploadComponent";
import './App.css';
import BookReaderWrapperComponent from "./components/BookReaderWrapperComponent";

const store = createStore(
    bookReducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends React.Component{

    render()
    {
        return <Provider store={store}>
                    <div>
                        <BookUploadComponent/>
                        <BookReaderWrapperComponent/>
                    </div>
                </Provider>
    }
}

export default App;
