import React, { Component } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

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
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={plant.ThumbnailImage} />
            <Card.Body>
              <Card.Title>{plant.Name}</Card.Title>
              <Card.Text>{plant.Description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Light: {plant.Light}</ListGroupItem>
              <ListGroupItem>Water: {plant.Watering}</ListGroupItem>
              <ListGroupItem>Season: {plant.Season}</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link href="/plantdetails">See more info</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>

          <br />
        </div>
      );
    });
    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item active>Explore Plants</Breadcrumb.Item>
          <Breadcrumb.Item href="/contactus">Contact Us</Breadcrumb.Item>
        </Breadcrumb>
        <h1> All Plants </h1>
        <CardDeck>{plantItems}</CardDeck>
      </div>
    );
  }
}

export default Plants;

// <img src={plant.ThumbnailImage} alt="vegetable" />
//           <h2>{plant.Name}</h2>
//           <p>{plant.Description}</p>
//           <ul>
//             <li>Light: {plant.Light}</li>
//             <li>Water: {plant.Watering}</li>
//             <li>Season: {plant.Season}</li>
//           </ul>
