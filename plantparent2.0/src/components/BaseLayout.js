import React, { Component } from "react";
import Menu from "../components/Menu";
import Counter from "../components/Counter";
import Plants from "../components/Plants";
import TextInput from "../components/TextInput";
import App from "../App";

class BaseLayout extends Component {
  render() {
    return (
      <div>
        <Menu />
        {this.props.children}
        <a href="http://www.amycodes.me">Amycodes.me 2020</a>
      </div>
    );
  }
}

export default BaseLayout;
