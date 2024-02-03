import React, { Component } from "react";

class Image extends Component {
  state = {};
  render() {
    // map over array return image
    return <img src={this.props.image} alt={this.props.character} />;
  }
}

export default Image;
