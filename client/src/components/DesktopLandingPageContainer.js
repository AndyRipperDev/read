import {
  Button,
  Container,
  Dimmer,
  Menu,
  Responsive,
  Image,
  Icon,
  Transition,
  Visibility
} from "semantic-ui-react";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LandingPageHeading from "./LandingPageHeading";
import { loginClearErrors, loginUser } from "../redux/authActionCreators";
import { logoutUser } from "../redux/authActionCreators";
const mapStateToProps = state => {
  return {
    isAuthenticated: state.authReducer.isAuthenticated,
    isLoading: state.authReducer.isLoading,
    errMess: state.authReducer.errMess
  };
};

const mapDispatchToProps = dispatch => ({
  loginUser: user => dispatch(logoutUser(user)),
  loginClearErrors: () => dispatch(loginClearErrors())
});

const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

class DesktopContainer extends Component {
  state = {};
  state = { activeItem: "home" };
  state = { visible: true };

  handleVisibility = () => this.setState({ visible: !this.state.visible });

  handleVisibilityAndHideFixedMenu = () => {
    this.setState({ visible: !this.state.visible });
    this.setState({ fixed: false });
  };

  handleVisibilityAndShowFixedMenu = () => {
    this.setState({ visible: !this.state.visible });
    this.setState({ fixed: true });
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleOpenLogin = () => {
    this.props.loginClearErrors();
    this.setState({ activeLogin: true });
  };
  handleCloseLogin = () => this.setState({ activeLogin: false });

  handleOpenSignUp = () => {
    this.props.loginClearErrors();
    this.setState({ activeSignUp: true });
  };
  handleOpenProfileMenu = () => this.setState({ activeProfileMenu: true });
  handleCloseProfileMenu = () => this.setState({ activeProfileMenu: false });
  handleCloseSignUp = () => this.setState({ activeSignUp: false });

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { activeItem } = this.state;
    const { activeLogin } = this.state;
    const { activeSignUp } = this.state;
    const { fixed } = this.state;
    const { visible } = this.state;
    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onTopPassed={this.handleVisibility}
          onTopPassedReverse={this.handleVisibilityAndHideFixedMenu}
          onBottomPassed={this.handleVisibilityAndShowFixedMenu}
          onBottomPassedReverse={this.handleVisibility}
        >
          <Transition.Group animation="fade down" duration={500}>
            {visible && (
              <Menu
                fixed="top"
                inverted
                pointing={!fixed}
                secondary={!fixed}
                size="large"
              >
                <Container>
                  <Menu.Item
                    as="a"
                    name="home"
                    active={activeItem === "home"}
                    onClick={this.handleItemClick}
                  >
                    Home
                  </Menu.Item>
                  <Menu.Item
                    as="a"
                    name="introduction"
                    active={activeItem === "introduction"}
                    onClick={this.handleItemClick}
                  >
                    Introduction
                  </Menu.Item>
                  <Menu.Item
                    as="a"
                    name="about"
                    active={activeItem === "about"}
                    onClick={this.handleItemClick}
                  >
                    About
                  </Menu.Item>
                  {!this.props.isAuthenticated ? (
                    <Menu.Item position="right">
                      <Button
                        onClick={this.handleOpenLogin}
                        primary={fixed}
                        inverted
                        animated
                      >
                        <Button.Content visible>Log in</Button.Content>
                        <Button.Content hidden>
                          <Icon name="sign-in" />
                        </Button.Content>
                      </Button>
                      <Button
                        style={{ marginLeft: "0.5em" }}
                        onClick={this.handleOpenSignUp}
                        primary={fixed}
                        inverted
                        animated
                      >
                        <Button.Content visible>Sign up</Button.Content>
                        <Button.Content hidden>
                          <Icon name="user plus" />
                        </Button.Content>
                      </Button>
                    </Menu.Item>
                  ) : (
                    <Menu.Item
                      position="right"
                      style={{ paddingTop: "0.65em", paddingBottom: "0.6em" }}
                    >
                      <Image
                        src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                        avatar
                      />
                      <span
                        style={{ paddingRight: "2em", paddingLeft: "0.5em" }}
                      >
                        Joe
                      </span>

                      <Button
                        onClick={() => {
                          this.props.loginUser();
                          this.handleCloseProfileMenu();
                        }}
                        inverted
                        primary={fixed}
                        animated
                      >
                        <Button.Content visible>Log out</Button.Content>
                        <Button.Content hidden>
                          <Icon name="sign-out" />
                        </Button.Content>
                      </Button>
                    </Menu.Item>
                  )}
                </Container>
              </Menu>
            )}
          </Transition.Group>

          <LandingPageHeading />
        </Visibility>
        <Dimmer
          active={activeLogin}
          onClickOutside={this.handleCloseLogin}
          page
        >
          <LoginPage onLogin={this.handleCloseLogin} />
        </Dimmer>

        <Dimmer
          active={activeSignUp}
          onClickOutside={this.handleCloseSignUp}
          page
        >
          <SignUpPage onSignUp={this.handleCloseSignUp} />
        </Dimmer>
        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DesktopContainer);
