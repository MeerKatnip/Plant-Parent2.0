import React, { Component } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";

class PlantDetails extends Component {
  componentDidMount() {
    console.log(this.props.match.params.VegetableCode);
  }

  render() {
    return (
      <span>
        <Breadcrumb>
          <Breadcrumb.Item href="/plantmain">Explore Plants</Breadcrumb.Item>
          <Breadcrumb.Item active>Plant Details</Breadcrumb.Item>
        </Breadcrumb>
        <h1>Plant Details</h1>
      </span>
    );
  }
}

export default PlantDetails;
