import { Segment, Image, Grid, Header } from "semantic-ui-react";
import React, { Component } from "react";
import PropTypes from "prop-types";
import DesktopPageContainer from "./DesktopPageContainer";
import MobileContainer from "./MobilePageContainer";

const ResponsiveContainerNav = ({ children }) => (
  <div>
    <DesktopPageContainer>{children}</DesktopPageContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainerNav.propTypes = {
  children: PropTypes.node
};

export default ResponsiveContainerNav;
