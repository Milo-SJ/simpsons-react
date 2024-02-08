import React, { Component } from "react";
import axios from "axios";
import Characters from "./components/Characters";
import "./styles.css";
import Spinner from "./components/Spinner";
import Search from "./components/Search";

class App extends Component {
  state = {};

  componentDidMount() {
    this.getApiData("future");
  }

  getApiData = async (searchInput) => {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50&character=${
        searchInput ? searchInput : "character"
      }`
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

  onCharacterSearch = (e) => {
    this.getApiData(e.target.value);
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

    return (
      <>
        <header>
          <h1>The Simpsons</h1>
        </header>
        <main>
          <div className="search-container">
            <div>
              <Search onCharacterSearch={this.onCharacterSearch} />
            </div>
            <div>
              <p>Likes: {count}</p>
            </div>
          </div>

          <Characters
            simpsons={simpsons}
            deleteCharacter={this.deleteCharacter}
            onLikeToggle={this.onLikeToggle}
          />
        </main>
        <footer></footer>
      </>
    );
  }
}

export default App;
