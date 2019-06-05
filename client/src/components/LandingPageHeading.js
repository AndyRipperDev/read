import book3 from "../imgs/book.jpg";
import {Button, Header, Icon} from "semantic-ui-react";
import React from "react";
import PropTypes from "prop-types";

const mapStateToProps = state => {
    return {
        isAuthenticated: state.authReducer.isAuthenticated,
        isLoading: state.authReducer.isLoading,
        errMess: state.authReducer.errMess
    };
};

const LandingPageHeading = ({ mobile }) => (
    <div
        style={{
            position: "relative",
            background: "url(" + book3 + ") no-repeat center center fixed",
            "-webkit-background-size": "cover",
            "-moz-background-size:": "cover",
            backgroundSize: "cover",
            textAlign: "center",
            color: "#fff",
            paddingTop: "110px",
            minHeight: mobile ? "500px" : "950px"
        }}
        className="img-text-heading"
    >
        <Header
            as="h1"
            content="Welcome to Readify"
            inverted
            style={{
                fontSize: mobile ? "2em" : "4em",
                fontWeight: "normal",
                marginBottom: 0,
                marginTop: mobile ? "1.5em" : "3em"
            }}
        />

        <Header
            as="h2"
            content="Read whatever you want when you want to."
            inverted
            style={{
                fontSize: mobile ? "1.5em" : "1.7em",
                fontWeight: "normal",
                marginTop: mobile ? "0.5em" : "1.5em",
                paddingBottom: mobile ? "0.3em" : "1em"
            }}
        />

        <Button inverted animated size="huge">
            <Button.Content visible>Get Started</Button.Content>
            <Button.Content hidden>
                <Icon name="arrow right" />
            </Button.Content>
        </Button>
    </div>
);

LandingPageHeading.propTypes = {
    mobile: PropTypes.bool
};

export default LandingPageHeading