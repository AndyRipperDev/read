import React from "react";
import {Button, Container} from "semantic-ui-react";
import "./PageComponent.css"
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
        return <div>
            <BookStylesheetManager stylesheets={stylesheets}/>
            <Button onClick={this.previousChapter}>previous chapter</Button>
            <Button onClick={this.nextChapter}>next chapter</Button>
            <Button onClick={this.previousPage}>previous page</Button>
            <Button onClick={this.nextPage}>next page</Button>
            <div ref={this.chapterDivRef}>
                <Container className={"PageBookReader"} text>{chapter}</Container>
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
        const root = this.chapterDivRef.current.getElementsByTagName("div")[0];
        let nodes = Array.prototype.slice.call(root.getElementsByTagName("*"), 0);
        return nodes.filter(function (node) {
            let leafNode = true;
            for (let childNode of node.childNodes) {
                //Paragraph nodes are considered leafs even if they contain spans and whatnot in them
                if(node.nodeName == "P" && ['SPAN', 'SUB'].includes(childNode.nodeName))
                {
                    break
                }
                //If any of node children is an element node then not leaf
                if (childNode.nodeType === 1) {
                    leafNode = false;
                    break;
                }
            }
            return leafNode
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
                    leafNode.style.display = "none";
                    lastNodeIndex = i - 1
                }
            }
            return lastNodeIndex
        };
        console.log(leafNodes)
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
        const parentRect = this.chapterDivRef.current.getElementsByTagName("div")[0].getBoundingClientRect();
        return (
            rect.top >= parentRect.top && rect.bottom <= parentRect.bottom
        );
    };

    previousPage = () => {
        this.setState({
            currentPage: this.state.currentPage > 1 ? this.state.currentPage - 1 : 1
        });
    };

    nextPage = () => {
        if (!this.lastPage)
            this.setState({
                currentPage: this.state.currentPage + 1,
            })
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