import React, { Component } from "react";

class TextInput extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      age: "",
    };
  }

  handleTextboxChange = (e) => {
    console.log(e.target.name);

    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <input
          name="name"
          type="text"
          placeholder="Name"
          onChange={this.handleTextboxChange}
        />
        <input
          name="age"
          type="text"
          placeholder="Age"
          onChange={this.handleTextboxChange}
        />

        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

export default TextInput;
