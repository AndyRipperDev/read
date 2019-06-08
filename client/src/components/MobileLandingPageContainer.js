import {
  Button,
  Dimmer,
  Label,
  Menu,
  Responsive,
  Segment,
  Image,
  Icon,
  Sidebar,
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

class MobileContainer extends Component {
  state = {};
  state = { activeItem: "home" };

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  handleSidebarHide = () => this.setState({ sidebarOpened: false });
  handleToggle = () => this.setState({ sidebarOpened: true });
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  handleItemClickAndSidebarHide = (e, { name }) => {
    this.setState({ activeItem: name });
    this.setState({ sidebarOpened: false });
  };

  handleOpenLogin = () => this.setState({ activeLogin: true });
  handleCloseLogin = () => this.setState({ activeLogin: false });

  handleOpenSignUp = () => this.setState({ activeSignUp: true });
  handleCloseSignUp = () => this.setState({ activeSignUp: false });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;
    const { activeItem } = this.state;
    const { activeLogin } = this.state;
    const { activeSignUp } = this.state;
    const { fixed } = this.state;

    return (
      <Responsive
        // as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <div>
          <Sidebar.Pushable as={Segment} style={{ transform: "none" }}>
            <Sidebar
              as={Menu}
              animation="push"
              inverted
              onHide={this.handleSidebarHide}
              style={{
                minWidth: "30%",
                fontSize: "1.2em",
                textAlign: "center",
                position: "fixed"
              }}
              vertical
              visible={sidebarOpened}
            >
              <Menu.Item
                as="a"
                name="close"
                style={{ textAlign: "right", paddingBottom: 40 }}
                onClick={this.handleSidebarHide}
              >
                <Icon name="close" />
              </Menu.Item>
              <Menu.Item
                as="a"
                name="home"
                active={activeItem === "home"}
                onClick={this.handleItemClickAndSidebarHide}
              >
                Home
              </Menu.Item>
              <Menu.Item
                as="a"
                name="introduction"
                active={activeItem === "introduction"}
                onClick={this.handleItemClickAndSidebarHide}
              >
                Introduction
              </Menu.Item>
              <Menu.Item
                as="a"
                name="about"
                active={activeItem === "about"}
                onClick={this.handleItemClickAndSidebarHide}
              >
                About
              </Menu.Item>
              {!this.props.isAuthenticated ? (
                <Menu.Item position="right">
                  <Button
                    as="a"
                    inverted
                    primary={fixed}
                    onClick={this.handleOpenLogin}
                  >
                    Log in
                  </Button>
                  <Button
                    as="a"
                    inverted
                    primary={fixed}
                    style={{ marginLeft: "0.5em" }}
                    onClick={this.handleOpenSignUp}
                  >
                    Sign Up
                  </Button>
                </Menu.Item>
              ) : (
                <Menu.Item position="right">
                  <Button onClick={this.handleOpenSignUp}>
                    <Label size={"big"} as="a" image>
                      <img src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
                      Joe
                    </Label>
                  </Button>
                </Menu.Item>
              )}
            </Sidebar>

            <Sidebar.Pusher dimmed={sidebarOpened}>
              <Segment style={{ padding: "0em" }}>
                <Visibility
                  once={false}
                  onBottomPassed={this.showFixedMenu}
                  onBottomPassedReverse={this.hideFixedMenu}
                >
                  <Menu
                    fixed="top"
                    inverted
                    pointing={!fixed}
                    secondary={!fixed}
                  >
                    <Menu.Item onClick={this.handleToggle}>
                      <Icon name="sidebar" />
                    </Menu.Item>
                    {!this.props.isAuthenticated ? (
                      <Menu.Item position="right">
                        <Button
                          onClick={this.handleOpenLogin}
                          primary={fixed}
                          inverted
                          animated
                        >
                          <Button.Content visible>Log In</Button.Content>
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
                          <Button.Content visible>Sign Up</Button.Content>
                          <Button.Content hidden>
                            <Icon name="user plus" />
                          </Button.Content>
                        </Button>
                      </Menu.Item>
                    ) : (
                      <Menu.Item position="right">
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
                  </Menu>
                </Visibility>
                <LandingPageHeading mobile />
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
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MobileContainer);
