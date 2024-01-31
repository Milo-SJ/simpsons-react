import React, { Component } from "react";

class Quote extends Component {
  state = {};
  render() {
    // map over array return quotes for each
    return <p>{this.props.quote}</p>;
  }
}

export default Quote;
