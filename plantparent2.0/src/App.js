import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Menu from "./components/Menu";
import Post from "./components/Post";
import Counter from "./components/Counter";
import Plants from "./components/Plants";

class App extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
      plants: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://cors-anywhere.herokuapp.com/" +
        "http://highoncoding.com/vegetable/getcatalog"
    )
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          plants: result,
        });
      });
  }

  render() {
    return (
      <div>
        <Menu />
        <Counter />
        <Plants listOfPlants={this.state.plants} />
      </div>
    );
  }
}

export default App;
