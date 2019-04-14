import React from "react";
import {Button, Container} from "semantic-ui-react";
import "./PageComponent.css"

const pageHeight = 800;

class PageComponent extends React.Component {


    constructor(props) {
        super(props);
        this.chapterDivRef = React.createRef();
        this.state = {
            currentPage: 1,
        }
    }

    render() {

        if (this.props.chapter) {
            return <div ref={this.chapterDivRef}>
                <Button onClick={this.previousPage}>previous page</Button>
                <Button onClick={this.nextPage}>next page</Button>
                <Container className={"PageComponent"} text>{this.props.chapter}</Container>
            </div>
        } else
            return <div></div>

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
        return nodes.filter(function (element) {
            let leafNode = true;
            for (let childNode of element.childNodes) {
                if (childNode.nodeType === 1 && element.nodeName != "p") {
                    leafNode = false;
                    break;
                }
            }
            return leafNode
        });
    }

    hideExceptPage(page)
    {
        let currentPage = 0
        let leafNodes = this.getLeafNodes()
        const foo = (firstVisibleNodeIndex) =>
        {
            let lastNodeIndex = Infinity
            for(let i = 0; i < leafNodes.length; i++)
            {
                let leafNode = leafNodes[i]
                leafNode.style.display = ""
                if(i < firstVisibleNodeIndex || i > lastNodeIndex)
                {
                    leafNode.style.display = "none"
                }
                else if(!this.isElementInViewport(leafNode))
                {
                    leafNode.style.display = "none"
                    lastNodeIndex = i-1
                }
            }
            return lastNodeIndex
        }
        let firstNodeIndex
        let lastNodeIndex = -1
        do
        {
            firstNodeIndex = lastNodeIndex+1
            lastNodeIndex = foo(lastNodeIndex+1)
            currentPage++
        }while(currentPage != page)

        console.log("First: ", firstNodeIndex, "Last: ", lastNodeIndex, "length: ", leafNodes.length)
        this.lastPage = firstNodeIndex > leafNodes.length || lastNodeIndex > leafNodes.length;
        console.log(this.lastPage)

    }

    isElementInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        const parentRect = this.chapterDivRef.current.getElementsByTagName("div")[0].getBoundingClientRect();
        return (
            rect.top >= parentRect.top && rect.bottom <= parentRect.bottom
        );
    }

    previousPage = () => {
        this.setState({
            currentPage: this.state.currentPage>1?this.state.currentPage - 1:1
        });
    };

    nextPage = () => {
        if (!this.lastPage)
            this.setState({
                currentPage: this.state.currentPage + 1,
            })


    }
}

export default PageComponent