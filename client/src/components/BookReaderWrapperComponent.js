import React from "react";
import PageBookReader from "./PageBookReader";
import {connect} from "react-redux";
import {loginUser} from "../redux/authActionCreators";


const mapStateToProps = state => {
  return {
    books: state.bookReducer.books
  };
};

const mapDispatchToProps = dispatch => ({
    loginUser: (user) => dispatch(loginUser(user))
});

class BookReaderWrapperComponent  extends React.Component {

    render() {
        if(this.props.books[0])
        {
            console.log(this.props.books[0]);
            return <PageBookReader book={this.props.books[0]}></PageBookReader>
        }
        else
            return <div></div>
    }


}

export default connect(mapStateToProps)(BookReaderWrapperComponent);
