import React from "react";
import {Button, Container} from "semantic-ui-react";
import {connect} from "react-redux";

class WholeChapterComponent extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        if(this.props.chapter)
        {
            return <div ref={this.chapterDivRef}>
                <Container text>{this.props.chapter}</Container>
            </div>
        }
        else
            return <div></div>

    }

    handleScroll = (e) =>
    {
        console.log(e)
        if (e.deltaY < 0 && window.scrollY==0) {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
            this.props.previousChapter()

        }
        if (e.deltaY > 0  && (window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
            this.props.nextChapter()

        }
    }

    componentDidMount() {
        window.addEventListener('wheel', this.handleScroll)
        document.addEventListener("mousedown", this.handleMouseDown);
        document.addEventListener("mouseup", this.handleMouseUp);
    }

    componentWillUnmount() {
        window.removeEventListener("wheel", this.handleScroll)
        document.removeEventListener("mousedown", this.handleMouseDown);
        document.removeEventListener("mouseup", this.handleMouseUp);
    }

}

export default WholeChapterComponent