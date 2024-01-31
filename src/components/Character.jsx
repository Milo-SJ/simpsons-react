import React, { Component } from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";

class Character extends Component {
  state = {};
  render() {
    const { character, characterDirection, quote, image } = this.props.data;
    //bring in the name image and quote into here then into interface
    return (
      <>
        <Name name={character} />
        <div className={characterDirection}>
          <Image image={image} />
          <Quote quote={quote} />
        </div>
      </>
    );
  }
}

export default Character;
