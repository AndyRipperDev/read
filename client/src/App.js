import React from "react";
import "./semantic/dist/semantic.min.css";
import {applyMiddleware, compose, createStore} from "redux";
import bookReducer from "./redux/reducers/bookReducer";
import {Provider} from "react-redux";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage";
import BookUploadComponent from "./components/BookUploadComponent";
import BookReaderWrapperComponent from "./components/BookReaderWrapperComponent";
import LibraryComponent from "./components/LibraryComponent";
import thunk from "redux-thunk";

const store = createStore(
    bookReducer, /* preloadedState, */
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Route exact path="/" component={LandingPage}/>
                    <Route path="/upload" component={BookUploadComponent}/>
                    <Route path="/reader" component={BookReaderWrapperComponent}/>
                    <Route path="/library" component={LibraryComponent}/>
                </Router>
            </Provider>
        );
    }
}

export default App;
