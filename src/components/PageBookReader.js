import React from "react";
import "./PageBookReader.css"
import {Button} from "semantic-ui-react";
import parse from "html-react-parser";
import BookStylesheetManager from "./BookStylesheetManager";

const pageHeight = 800;

class PageBookReader extends React.Component {

    constructor(props) {
        super(props);
        this.chapterDivRef = React.createRef();
        this.state = {
            currentPage: 1,
            currentChapter: 0
        }
    }

    render() {
        let stylesheets = this.props.book.stylesheets;
        let chapter = parse(this.props.book.getChapter(this.state.currentChapter).bodyHtml);
        return <div className="ui grid">
            <BookStylesheetManager stylesheets={stylesheets}/>
            <div className={"row centered"}>
                <Button style={{backgroundColor: "#ff00ff"}} onClick={this.previousChapter}>previous chapter</Button>
                <Button onClick={this.nextChapter}>next chapter</Button>
                <Button onClick={this.previousPage}>previous page</Button>
                <Button onClick={this.nextPage}>next page</Button>
            </div>
            <div className={"row centered"}>
                <div
                    className="sixteen wide mobile eight wide tablet four wide computer column text container PageBookReaderWrapper">
                    <div className={"PageBookReader"} ref={this.chapterDivRef}>{chapter}</div>
                </div>
            </div>
        </div>
    }

    componentDidMount() {
        this.hideExceptPage(this.state.currentPage)
    }

    componentDidUpdate() {
        this.hideExceptPage(this.state.currentPage)
    }

    getLeafNodes() {
        const root = this.chapterDivRef.current;
        let nodes = Array.prototype.slice.call(root.getElementsByTagName("*"), 0);
        return nodes.filter(function (node) {
            if (['H1','H2','H3','H4','H5','H6', 'P'].includes(node.nodeName))
                return true
            return false
        });
    }

    hideExceptPage(page) {
        let currentPage = 0;
        let leafNodes = this.getLeafNodes();
        const foo = (firstVisibleNodeIndex) => {
            let lastNodeIndex = Infinity;
            for (let i = 0; i < leafNodes.length; i++) {
                let leafNode = leafNodes[i];
                leafNode.style.display = "";
                if (i < firstVisibleNodeIndex || i > lastNodeIndex) {
                    leafNode.style.display = "none"
                } else if (!this.isElementInViewport(leafNode)) {
                    leafNode.style.display = "none"
                    lastNodeIndex = i - 1
                }
            }
            return lastNodeIndex
        };
        let firstNodeIndex;
        let lastNodeIndex = -1;
        do {
            firstNodeIndex = lastNodeIndex + 1;
            lastNodeIndex = foo(firstNodeIndex);
            currentPage++
        }
        while (currentPage != page);
        this.lastPage = firstNodeIndex > leafNodes.length || lastNodeIndex > leafNodes.length;

    }

    isElementInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        const parentRect = this.chapterDivRef.current.getBoundingClientRect();
        return (
            rect.top >= parentRect.top && rect.bottom <= parentRect.bottom
        );
    };

    previousPage = () => {
        if (this.state.currentPage > 1) {
            this.setState({
                currentPage: this.state.currentPage - 1
            });
        } else {
            this.previousChapter();
        }
    };

    nextPage = () => {
        if (!this.lastPage)
            this.setState({
                currentPage: this.state.currentPage + 1,
            });
        else {
            this.nextChapter();
        }
    };

    previousChapter = () => {
        this.setState({
            currentChapter: this.state.currentChapter > 0 ? this.state.currentChapter - 1 : 0,
            currentPage: 1
        });
    };

    nextChapter = () => {
        this.setState({
            currentChapter: this.state.currentChapter + 1,
            currentPage: 1
        });
    };
}

export default PageBookReader;