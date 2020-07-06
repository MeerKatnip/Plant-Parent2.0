import React, { Component } from "react";

class Post extends Component {
  render() {
    return (
      <div>
        <h1>My name is: {this.props.name}</h1>
        <h1>My cat's name is: {this.props.cat}</h1>
      </div>
    );
  }
}

export default Post;
