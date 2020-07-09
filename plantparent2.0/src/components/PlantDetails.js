import React, { Component } from "react";

class PlantDetails extends Component {
  componentDidMount() {
    console.log(this.props.match.params.VegetableCode);
  }

  render() {
    return <h1>Plant Details</h1>;
  }
}

export default PlantDetails;
