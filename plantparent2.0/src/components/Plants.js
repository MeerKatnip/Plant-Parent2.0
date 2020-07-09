import React, { Component } from "react";

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
        <h1> Plants </h1>
        {plantItems}
      </div>
    );
  }
}

export default Plants;
