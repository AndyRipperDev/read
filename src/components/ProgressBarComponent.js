import React, { Component } from "react";
import { Progress } from "semantic-ui-react";

class ProgressBarComponent extends Component {
  render() {
    return (
      <Progress
        percent={this.props.value}
        progress
        autoSuccess
        color="yellow"
      />
    );
  }
}

export default ProgressBarComponent;
