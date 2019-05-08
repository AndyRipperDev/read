import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import PropTypes from "prop-types";
import React, { Component } from "react";
import book3 from "../imgs/book.jpg";
import book from "../imgs/bookDigital.jpg";
import book2 from "../imgs/bookDigital2.jpg";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Dimmer,
  Visibility,
  Transition
} from "semantic-ui-react";

const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
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
    class="img-text-heading"
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

  handleOpenLogin = () => this.setState({ activeLogin: true });
  handleCloseLogin = () => this.setState({ activeLogin: false });

  handleOpenSignUp = () => this.setState({ activeSignUp: true });
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
          <LoginPage />
        </Dimmer>

        <Dimmer
          active={activeSignUp}
          onClickOutside={this.handleCloseSignUp}
          page
        >
          <SignUpPage />
        </Dimmer>
        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
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
              <Menu.Item
                as="a"
                name="login"
                active={activeItem === "login"}
                onClick={this.handleItemClickAndSidebarHide}
              >
                Log in
              </Menu.Item>
              <Menu.Item
                as="a"
                name="signup"
                active={activeItem === "signup"}
                onClick={this.handleItemClickAndSidebarHide}
              >
                Sign Up
              </Menu.Item>
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
                  </Menu>
                </Visibility>
                <LandingPageHeading mobile />
                <Dimmer
                  active={activeLogin}
                  onClickOutside={this.handleCloseLogin}
                  page
                >
                  <LoginPage />
                </Dimmer>

                <Dimmer
                  active={activeSignUp}
                  onClickOutside={this.handleCloseSignUp}
                  page
                >
                  <SignUpPage />
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

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

const LandingPage = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Header as="h3" style={{ fontSize: "2em" }}>
              What is Readify?
            </Header>
            <p style={{ fontSize: "1.33em" }}>Readify is a superious app.</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Header as="h3" style={{ fontSize: "2em" }}>
              You can read what you want any time.
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Yes that's right, you thought it was the stuff of dreams, but
              future is here.
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Button primary animated size="huge">
              <Button.Content visible>Check It Out</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow right" />
              </Button.Content>
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: "0em" }} vertical>
      <Grid>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <div
              style={{
                position: "relative",
                background: "url(" + book + ") no-repeat center center fixed",
                "-webkit-background-size": "cover",
                "-moz-background-size:": "cover",
                backgroundSize: "cover",
                textAlign: "center",
                color: "#fff",
                paddingTop: "0px",
                minWidth: "100%",
                minHeight: "600px"
              }}
              class="img-text-heading"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Just upload a book and read it.
            </Header>
            <p style={{ fontSize: "1.33em" }}>It's that simple.</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              You can create your own library.
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Create, customize, delete, easy to use.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: "0em" }} vertical>
      <Grid>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <div
              style={{
                position: "relative",
                background: "url(" + book2 + ") no-repeat center center fixed",
                "-webkit-background-size": "cover",
                "-moz-background-size:": "cover",
                backgroundSize: "cover",
                textAlign: "center",
                color: "#fff",
                paddingTop: "0px",
                minWidth: "100%",
                minHeight: "600px"
              }}
              class="img-text-heading"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: "2em", textAlign: "center" }}>
          How it works
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Instead of reading a physical book, you can simply upload .EPUB
          digital book on the website and read it. You can also see informations
          of this book such as reviews, informations about author, etc.
        </p>
        <div style={{ textAlign: "center" }}>
          <Button animated size="large">
            <Button.Content visible>Read More</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content>
          </Button>
        </div>
        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: "3em 0em", textTransform: "uppercase" }}
        >
          <a href="#">Did you know?</a>
        </Divider>
        <p style={{ fontSize: "1.33em", textAlign: "center" }}>
          More people in these days read digital books instead of physical ones.
        </p>
      </Container>
    </Segment>
    <Segment inverted vertical style={{ padding: "5em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column textAlign={null} width={5}>
              <Header inverted as="h4" content="About" />
              <List link inverted>
                <List.Item as="a">Contact Us</List.Item>
                <List.Item as="a">Why This Website Exists</List.Item>
                <List.Item as="a">About Us</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={5}>
              <Header inverted as="h4" content="Services" />
              <List link inverted>
                <List.Item as="a">There are no services yet</List.Item>
                {/*<List.Item as='a'>FAQ</List.Item>
                <List.Item as='a'>How To Access</List.Item>*/}
              </List>
            </Grid.Column>
            <Grid.Column width={5}>
              <Header as="h4" inverted>
                Join Us
              </Header>
              <p>Become member of our team</p>
              <p>https://readify.com</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
);
export default LandingPage;