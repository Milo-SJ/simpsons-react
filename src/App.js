import React, { Component } from "react";
import axios from "axios";
import Characters from "./components/Characters";
import "./styles.css";
import Spinner from "./components/Spinner";
import Search from "./components/Search";

class App extends Component {
  state = {};

  componentDidMount() {
    this.getApiData();
  }

  getApiData = async () => {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
    );

    this.setState({ simpsons: data });
  };

  deleteCharacter = (quote) => {
    const simpsons = [...this.state.simpsons];
    const index = simpsons.findIndex((item) => item.quote === quote);
    simpsons.splice(index, 1);
    this.setState({ simpsons });
  };

  onLikeToggle = (quote) => {
    const simpsons = [...this.state.simpsons];
    const index = simpsons.findIndex((item) => item.quote === quote);
    simpsons[index].liked = !simpsons[index].liked;
    this.setState({ simpsons });
    console.log("clicked");
  };

  onCharacterSearch = (character) => {
    const simpsons = [...this.state.simpsons];
    const searchedCharacters = simpsons.filter((item) =>
      item.character.toLowerCase().includes(character.toLowerCase())
    );
    this.setState({ simpsons: searchedCharacters });
  };

  render() {
    if (!this.state.simpsons) {
      return <Spinner />;
    }
    console.log(this.state);
    const { simpsons } = this.state;
    console.log(simpsons);
    let count = 0;
    simpsons.forEach((element) => {
      if (element.liked) {
        count++;
      }
    });
    //below is where I will input code to return to original if no search or search deleted
    // if falsy searchedCharacters and no length return to origninal
    // if (!this.state.searchedCharacters || searchedCharacters.length === 0) {
    //   return (
    //     <>
    //       <Characters
    //         simpsons={simpsons}
    //         deleteCharacter={this.deleteCharacter}
    //         onLikeToggle={this.onLikeToggle}
    //       />
    //     </>
    //   );
    // }
    return (
      <>
        <div>
          <Search onCharacterSearch={this.onCharacterSearch} />
          <h2>Likes {count}</h2>
        </div>

        <Characters
          simpsons={simpsons}
          deleteCharacter={this.deleteCharacter}
          onLikeToggle={this.onLikeToggle}
        />
      </>
    );
  }
}

export default App;
