import React from "react";
import { connect } from 'react-redux'
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { NavLink } from 'react-router-dom'


function MyGreenhouse(props) {

  let plantItems = props.plants.slice(20, 25).map((plant) => {
    return (
      <div key={plant.VegetableId} className="shadow p-3 mb-5 bg-white rounded">
        <Card style={{ width: "18rem" }} border="success">
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
          
        
          <div><NavLink to={"/plantdetails/" + plant.VegetableId}><button type="button" className="btn btn-outline-success">More Plant Details</button></NavLink></div>
          </Card.Body>
        </Card>

        <br />
      </div>
    
    );
    
});


  return (
    <div>
      <h1>My Greenhouse</h1>
      <CardDeck>{plantItems}</CardDeck>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    plants: state.plants
  }
}

export default connect(mapStateToProps)(MyGreenhouse);