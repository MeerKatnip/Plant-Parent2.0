import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Menu from "./components/Menu";
import Post from "./components/Post";
import Counter from "./components/Counter";
import Plants from "./components/Plants";
import TextInput from "./components/TextInput";
import Home from "./components/Home";

// Fetches and renders plants from API

// "https://cors-anywhere.herokuapp.com/" +

class PlantMain extends Component {
  constructor() {
    super();

    this.state = {
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
        <Plants listOfPlants={this.state.plants} />
      </div>
    );
  }
}

export default PlantMain;
