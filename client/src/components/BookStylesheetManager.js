import React from "react";

const mapStateToProps = state => {
    return {
        books: state.books,
    }
};

class BookStylesheetManager extends React.Component {
    constructor(props) {
        super(props);
        this.sheet = document.createElement('style');
    }

    render() {
        let sheetInnerHtml = ""
        for (let stylesheet of this.props.stylesheets) {
            sheetInnerHtml+=stylesheet
        }
        this.sheet.innerHTML = sheetInnerHtml
        return (null);
    }

    componentDidMount() {
        document.body.appendChild(this.sheet);
    }

    componentWillUnmount() {
        document.body.removeChild(this.sheet)
    }

}

export default BookStylesheetManager