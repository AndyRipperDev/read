import React, { Component } from "react";
import ProgressBarComponent from "./ProgressBarComponent";
import { Sidebar, Menu, Segment, Icon, Button } from "semantic-ui-react";

class ReaderMenuComponent extends Component {
  state = {};
  state = { activeItem: "home" };

  handleSidebarHide = () => this.setState({ sidebarOpened: false });
  handleToggle = () => this.setState({ sidebarOpened: true });
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  handleItemClickAndSidebarHide = (e, { name }) => {
    this.setState({ activeItem: name });
    this.setState({ sidebarOpened: false });
  };

  render() {
    const { sidebarOpened } = this.state;
    const { activeItem } = this.state;
    return (
      <div>
        <Sidebar.Pushable as={Segment} style={{ transform: "none" }}>
          <Sidebar
            as={Menu}
            animation="overlay"
            inverted
            onHide={this.handleSidebarHide}
            style={{
              minWidth: "100px",
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
          </Sidebar>

          <Sidebar.Pusher>
            <Button
              icon
              as="a"
              style={{ textAlign: "center" }}
              onClick={this.handleToggle}
              inverted
              size="huge"
            >
              <Icon color="grey" name="sidebar" />
            </Button>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default ReaderMenuComponent;
