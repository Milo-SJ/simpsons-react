import React, { Component } from "react";
import axios from "axios";
import Characters from "./components/Characters";
import "./styles.css";

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

  // deleteCharacter = () => {
  //   const simpsons = [...this.state.simpsons];
  //   const index = simpsons.findIndex((item) => item.simpsons === simpsons);
  //   simpsons.splice(index, 1);
  //   this.setState({ simpsons });
  // };
  render() {
    console.log(this.state);
    const { simpsons } = this.state;

    return <Characters simpsons={simpsons} />;
  }
}

export default App;
