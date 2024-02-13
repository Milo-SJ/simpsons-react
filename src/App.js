import React, { Component } from "react";
import axios from "axios";
import Characters from "./components/Characters";
import "./styles.css";
import Spinner from "./components/Spinner";
import Search from "./components/Search";
import Joi from "joi";

class App extends Component {
  state = {};

  componentDidMount() {
    this.getApiData();
  }

  getApiData = async (searchInput) => {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50&character=${
        searchInput ? searchInput : ""
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

  schema = { character: Joi.string().min(3).max(25) };

  onCharacterSearch = async (e) => {
    this.getApiData(e.target.value);

    // validation
    const _joiInstance = Joi.object(this.schema);
    try {
      await _joiInstance.validateAsync({ character: e.target.value });
      this.setState({ errors: undefined });
    } catch (e) {
      console.log(e);

      const errorsMod = {};
      e.details.forEach((error) => {
        errorsMod[error.context.key] = error.message;
      });
      this.setState({ errors: errorsMod });
    }
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
            <p>{this.state.errors && this.state.errors.character}</p>
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
