import book3 from "../imgs/book.jpg";
import {Button, Header, Icon} from "semantic-ui-react";
import React from "react";
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import BookUploadComponent from "./BookUploadComponent";

const mapStateToProps = state => {
    return {
        isAuthenticated: state.authReducer.isAuthenticated,
        isLoading: state.authReducer.isLoading,
        errMess: state.authReducer.errMess
    };
};

const LandingPageHeading = (props) => (
    <div
        style={{
            position: "relative",
            background: "url(" + book3 + ") no-repeat center center fixed",
            "WebkitBackgroundSize:": "cover",
            "MozBackgroundSize:": "cover",
            backgroundSize: "cover",
            textAlign: "center",
            color: "#fff",
            paddingTop: "110px",
            minHeight: props.mobile ? "500px" : "950px"
        }}
        className="img-text-heading"
    >
        <Header
            as="h1"
            content="Welcome to Readify"
            inverted
            style={{
                fontSize: props.mobile ? "2em" : "4em",
                fontWeight: "normal",
                marginBottom: 0,
                marginTop: props.mobile ? "1.5em" : "3em"
            }}
        />

        <Header
            as="h2"
            content="Read whatever you want when you want to."
            inverted
            style={{
                fontSize: props.mobile ? "1.5em" : "1.7em",
                fontWeight: "normal",
                marginTop: props.mobile ? "0.5em" : "1.5em",
                paddingBottom: props.mobile ? "0.3em" : "1em"
            }}
        />
        {props.isAuthenticated ?
            <Button onClick={() => {
                props.history.push('/library')
            }} inverted animated size="huge">
                <Button.Content visible>Go To Library</Button.Content>
                <Button.Content hidden>
                    <Icon name="arrow right"/>
                </Button.Content>
            </Button>:
            <BookUploadComponent/>
        }
    </div>
);

LandingPageHeading.propTypes = {
    mobile: PropTypes.bool
};

export default withRouter(connect(mapStateToProps)(LandingPageHeading))