import React, { Component } from "react";
import axios from "axios";
import Characters from "./components/Characters";
import "./styles.css";

class App extends Component {
  state = { count: 0 };

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

  onClickLike = () => {
    this.setState({ count: this.state.count + 1 });
    console.log("clicked");
  };

  render() {
    console.log(this.state);
    const { simpsons, count } = this.state;

    return (
      <>
        <div>
          <h2>Likes {count}</h2>
        </div>
        <Characters
          simpsons={simpsons}
          deleteCharacter={this.deleteCharacter}
          onClickLike={this.onClickLike}
        />
      </>
    );
  }
}

export default App;
