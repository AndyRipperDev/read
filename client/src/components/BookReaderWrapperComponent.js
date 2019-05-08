import React from "react";
import PageBookReader from "./PageBookReader";
import {connect} from "react-redux";


const mapStateToProps = state => {
  return {
    books: state.books
  };
};

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