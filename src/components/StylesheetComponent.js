import React from "react";

const mapStateToProps = state => {
    return {
        books: state.books,
    }
};

class StylesheetComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (null);
    }

    componentDidMount() {
        for (let stylesheet of this.props.stylesheets) {
            console.log(stylesheet);
            let sheet = document.createElement('style');
            sheet.innerHTML = stylesheet;
            document.body.appendChild(sheet);
        }

    }

    componentWillUnmount() {

    }

}

export default StylesheetComponent