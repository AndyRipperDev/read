import React from 'react';
import './App.css';
import './semantic/dist/semantic.min.css'
import {createStore} from 'redux'
import bookReducer from "./redux/reducers/bookReducer";
import {Provider} from "react-redux";
import BookUploadComponent from "./components/BookUploadComponent";
import BookReaderComponent from "./components/BookReaderComponent";

const store = createStore(bookReducer);

class App extends React.Component{

    render()
    {

        return <Provider store={store}>
                    <div>
                        <BookUploadComponent/>
                        <BookReaderComponent/>
                    </div>
                </Provider>
    }
}

export default App;
