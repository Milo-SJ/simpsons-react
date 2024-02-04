import React, { Component } from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";

class Character extends Component {
  state = {};
  render() {
    const { character, characterDirection, quote, image } = this.props.data;
    const { deleteCharacter } = this.props;
    //bring in the name image and quote into here then into interface
    return (
      <>
        <div key={quote}>
          <Name name={character} />
          <div className={characterDirection}>
            <Image image={image} />
            <Quote quote={quote} />
          </div>
          <button onClick={() => deleteCharacter(quote)}>Delete</button>
        </div>
      </>
    );
  }
}

export default Character;
