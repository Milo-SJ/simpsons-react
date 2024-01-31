import React, { Component } from "react";
import axios from "axios";
import Characters from "./components/Characters";

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

  render() {
    console.log(this.state);
    const { simpsons } = this.state;

    return <Characters simpsons={simpsons} />;
  }
}

export default App;
