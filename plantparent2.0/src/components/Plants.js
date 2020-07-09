import React, { Component } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";

class Plants extends Component {
  constructor() {
    super();
    this.state = {
      plants: [],
    };
  }

  render() {
    let plantItems = this.props.listOfPlants.map((plant) => {
      return (
        <div key={plant.VegetableId}>
          <img src={plant.ThumbnailImage} alt="vegetable" />
          <h2>{plant.Name}</h2>
          <p>{plant.Description}</p>
          <ul>
            <li>Light: {plant.Light}</li>
            <li>Water: {plant.Watering}</li>
            <li>Season: {plant.Season}</li>
          </ul>
        </div>
      );
    });
    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Explore Plants</Breadcrumb.Item>
          <Breadcrumb.Item href="/contactus">Contact Us</Breadcrumb.Item>
        </Breadcrumb>
        <h1> All Plants </h1>
        {plantItems}
      </div>
    );
  }
}

export default Plants;
