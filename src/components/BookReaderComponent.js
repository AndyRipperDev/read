import React from "react";
import parse from "html-react-parser";
import PageComponent from "./PageComponent";
import {connect} from "react-redux";
import {Button} from "semantic-ui-react";
import BookStylesheetManager from "./BookStylesheetManager";

const mapStateToProps = state => {
    return {
        books: state.books,
    }
};

class BookReaderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentChapter: 0,
            currentPage: 1,
        }
    }


    render() {

        if (this.props.books[0]) {
            let stylesheets = this.props.books[0].stylesheets;
            return <div >
                <BookStylesheetManager stylesheets={stylesheets}/>
                <Button onClick={this.previousChapter}>previous chapter</Button>
                <Button onClick={this.nextChapter}>next chapter</Button>
                <Button onClick={this.previousPage}>previous page</Button>
                <Button onClick={this.nextPage}>next page</Button>
                <PageComponent setCustomBookStylesheet={this.setCustomBookStylesheet}
                               chapter={parse(this.props.books[0].getChapter(this.state.currentChapter).bodyHtml)}
                               page={this.state.currentPage}/>
            </div>
        } else
            return <div></div>
    }

    setCustomBookStylesheet = (stylesheet) => {
        this.setState({"readerCustomBookStylesheet" : stylesheet})
    };

    previousChapter = () => {
        this.setState({
            currentChapter: this.state.currentChapter - 1,
            currentPage: 1
        });
    };

    nextChapter = () => {
        this.setState({
            currentChapter: this.state.currentChapter + 1,
            currentPage: 1
        });
    };

    previousPage = () => {
        this.setState({
            currentPage: this.state.currentPage - 1,
        });
    };

    nextPage = () => {
        this.setState({
            currentPage: this.state.currentPage + 1,
        });
    }
}

export default connect(mapStateToProps)(BookReaderComponent)