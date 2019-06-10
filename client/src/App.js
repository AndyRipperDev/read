import React from "react";
import "./semantic/dist/semantic.min.css";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import bookReducer from "./redux/reducers/bookReducer";
import authReducer from "./redux/reducers/authReducer";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage";
import BookUploadComponent from "./components/BookUploadComponent";
import BookReaderWrapperComponent from "./components/BookReaderWrapperComponent";
import LibraryComponent from "./components/LibraryComponent";
import InfoPage from "./components/InfoPage";
import thunk from "redux-thunk";

const store = createStore(
  combineReducers({
    bookReducer: bookReducer,
    authReducer: authReducer
  }) /* preloadedState, */,
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
          <Route exact path="/" component={LandingPage} />
          <Route path="/upload" component={BookUploadComponent} />
          <Route path="/reader" component={BookReaderWrapperComponent} />
          <Route path="/library" component={LibraryComponent} />
          <Route path="/info" component={InfoPage} />
        </Router>
      </Provider>
    );
  }
}

export default App;
