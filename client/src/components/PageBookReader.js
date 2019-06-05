import React from "react";
import {Button} from "semantic-ui-react";
import parse from "html-react-parser";
import BookStylesheetManager from "./BookStylesheetManager";
import PageComponent from "./PageComponent";

const pageHeight = 800;

class PageBookReader extends React.Component {

    constructor(props) {
        super(props);
        this.chapterDivRef = React.createRef();
        this.state = {
            currentPage: 1,
            currentChapter: 0,
            pages:[]
        }
    }

    render() {
        let stylesheets = this.props.book.stylesheets;
        let chapter = parse(this.props.book.chapters[this.state.currentChapter]);
        return <div className="ui grid">
            <BookStylesheetManager stylesheets={stylesheets}/>
            <div className={"row centered"}>
                <Button onClick={this.previousChapter}>previous chapter</Button>
                <Button onClick={this.nextChapter}>next chapter</Button>
                <Button onClick={this.previousPage}>previous page</Button>
                <Button onClick={this.nextPage}>next page</Button>
            </div>
            <PageComponent paginate={this.paginateChapter} ref={this.chapterDivRef} chapter={chapter}/>
        </div>
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.hideExceptPage(this.state.currentPage)
    }

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
        if (this.state.currentPage >= this.state.pages.length)
            this.nextChapter();
        else {
            this.setState({
                currentPage: this.state.currentPage + 1,
            });
        }
    };

    previousChapter = () => {
        this.setState({
            currentChapter: this.state.currentChapter > 0 ? this.state.currentChapter - 1 : 0,
            currentPage: Infinity
        });
    };

    nextChapter = () => {
        this.setState({
            currentChapter: this.state.currentChapter + 1,
            currentPage: 1
        });
    };

    getLeafNodes = () => {
        if(this.chapterDivRef.current)
        {
            const root = this.chapterDivRef.current;
            let nodes = Array.prototype.slice.call(root.getElementsByTagName("*"), 0);
            let leafNodes = nodes.filter(function (node) {
                if (['H1','H2','H3','H4','H5','H6', 'P', 'BLOCKQUOTE'].includes(node.nodeName))
                    return true
                return false
            });
            return leafNodes
        }
    }

    isElementInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        const parentRect = this.chapterDivRef.current.getBoundingClientRect();
        return (
            rect.top >= parentRect.top && rect.bottom <= parentRect.bottom
        );
    };

    hideExceptFit = (leafNodes, firstVisibleNodeIndex) => {
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

    paginateChapter = () => {
        let leafNodes = this.getLeafNodes();
        let pages = [];
        if(leafNodes)
        {
            let firstNodeIndex;
            let lastNodeIndex = -1;
            let lastPage;
            do {
                firstNodeIndex = lastNodeIndex + 1;
                lastNodeIndex = this.hideExceptFit(leafNodes, firstNodeIndex);
                pages.push(firstNodeIndex);
                lastPage = firstNodeIndex > leafNodes.length || lastNodeIndex > leafNodes.length;
            }
            while (!lastPage);
        }
        else
            pages = [0]
        if(this.state.currentPagse == Infinity)
            this.setState({pages: pages, currentPage: pages.length})

    }

    hideExceptPage(i)
    {
        this.hideExceptFit(this.getLeafNodes(),this.state.pages[i-1])
    }
}

export default PageBookReader;