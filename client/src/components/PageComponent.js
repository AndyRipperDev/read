import React from "react";
import "./PageBookReader.css"
import isEqual from "react-fast-compare";

class PageComponent extends React.Component {
    render() {
        return (
            <div className={"row centered"}>
                <div
                    className="sixteen wide mobile eight wide tablet four wide computer column text container PageBookReaderWrapper">
                    <div className={"PageBookReader"} ref={this.props.innerRef}>{this.props.chapter}</div>
                </div>
            </div>
        )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.props.paginate();
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        let shouldUpdate = !isEqual(this.props, nextProps);
        return shouldUpdate
    }
}

export default React.forwardRef((props, ref) => <PageComponent innerRef={ref} {...props}/>);