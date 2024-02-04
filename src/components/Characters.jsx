import React, { Component } from "react";

import Character from "./Character";

class Characters extends Component {
  state = {};
  render() {
    return (
      // bring each of the below in from their components then place interface into app
      <>
        {this.props.simpsons &&
          this.props.simpsons.map((item, index) => (
            <Character
              data={item}
              deleteCharacter={this.props.deleteCharacter}
              index={index}
            />
          ))}
      </>
    );
  }
}

export default Characters;
