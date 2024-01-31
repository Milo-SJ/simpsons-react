import React, { Component } from "react";

class Name extends Component {
  state = {};
  render() {
    // map over array then return each name
    return <h2>{this.props.name}</h2>;
  }
}

export default Name;
