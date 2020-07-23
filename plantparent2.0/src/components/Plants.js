import React, { useState, useEffect } from "react";
import '../App.css'
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { NavLink } from 'react-router-dom'
import Greeting from './Greeting'




function Plants(props) {
  
  

      let plantItems = props.listOfPlants.map((plant) => {
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
              <div><button type="button" className="btn btn-success">Add to My Greenhouse</button></div>
            
              <div><NavLink to={"/plantdetails/" + plant.VegetableId}><button type="button" className="btn btn-outline-success">More Plant Details</button></NavLink></div>
              </Card.Body>
            </Card>

            <br />
          </div>
        
        );
        
    });

    
      return (
        <div>
          <Greeting/>
          <CardDeck>{plantItems}</CardDeck>
        </div>
      );

    
    
    
}



export default Plants

// <img src={plant.ThumbnailImage} alt="vegetable" />
//           <h2>{plant.Name}</h2>
//           <p>{plant.Description}</p>
//           <ul>
//             <li>Light: {plant.Light}</li>
//             <li>Water: {plant.Watering}</li>
//             <li>Season: {plant.Season}</li>
//           </ul>
