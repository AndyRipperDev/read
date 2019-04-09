import React from "react";
import {Button, Container} from "semantic-ui-react";
import {connect} from "react-redux";

class PageComponent extends React.Component
{
    constructor(props)
    {
        super(props)
        this.chapterDivRef = React.createRef();
        this.state = {
            firstNodeIndex:0,
            lastNodeIndex:-1,
        }
    }

    render()
    {
        if(this.props.chapter)
        {
            return <div ref={this.chapterDivRef}>
                <Container text style={{height:800,  border: "1px solid blue"}}>{this.props.chapter}</Container>
            </div>
        }
        else
            return <div></div>

    }

    componentDidUpdate() {
        this.hideExceptPage(this.props.page)
    }


    getLeafNodes()
    {
        const root = this.chapterDivRef.current.getElementsByTagName("div")[0];
        let nodes = Array.prototype.slice.call(root.getElementsByTagName("*"), 0);
        let leafNodes = nodes.filter(function (element) {
            let leafNode = true
            for (let childNode of element.childNodes) {
                if (childNode.nodeType === 1 && element.nodeName != "P") {
                    leafNode = false
                    break;
                }
            }
            return leafNode
        });
        return leafNodes
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
                leafNode.style.display = "inherit"
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

        if(firstNodeIndex > leafNodes.length && lastNodeIndex > leafNodes.length)
            console.log("lastPage");
    }

    isElementInViewport =(element) =>
    {
        var rect = element.getBoundingClientRect()
        var parentRect = this.chapterDivRef.current.getElementsByTagName("div")[0].getBoundingClientRect()
        return (
            rect.top >= parentRect.top && rect.bottom <= parentRect.bottom
        );
    }

}

export default PageComponent