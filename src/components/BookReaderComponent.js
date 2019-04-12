import React from "react";
import parse from "html-react-parser";
import PageComponent from "./PageComponent";
import {connect} from "react-redux";
import {Button} from "semantic-ui-react";
import StylesheetComponent from "./StylesheetComponent";

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
            currentPage: 1
        }
    }


    render() {

        if (this.props.books[0]) {
            console.log(this.props.books[0].stylesheets);
            return <div style={{"overflow": "hidden"}}>
                <StylesheetComponent stylesheets={this.props.books[0].stylesheets}/>
                <Button onClick={this.previousChapter}>previous chapter</Button>
                <Button onClick={this.nextChapter}>next chapter</Button>
                <Button onClick={this.previousPage}>previous page</Button>
                <Button onClick={this.nextPage}>next page</Button>
                <PageComponent chapter={parse(this.props.books[0].getChapter(this.state.currentChapter).bodyHtml)}  page={this.state.currentPage}/>
                {/*<PageComponent chapter={parse(this.props.books[0].getChapter(this.state.currentChapter).bodyHtml)} page={this.state.currentPage+1}/>*/}
                {/*<WholeChapterComponent previousChapter={this.previousChapter} nextChapter={this.nextChapter} chapter={parse(this.props.books[0].getChapter(this.state.currentChapter).bodyHtml)}/>*/}
            </div>
        } else
            return <div></div>
    }

    componentDidMount() {

    }

    previousChapter = () => {
        this.setState({
            currentChapter: this.state.currentChapter - 1,
        });
    };

    nextChapter = () => {
        this.setState({
            currentChapter: this.state.currentChapter + 1,
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