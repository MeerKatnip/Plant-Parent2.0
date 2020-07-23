import React from "react";
import bg from '../images/plantparent.png'
import '../App.css'


function Greeting() {
    return (
      <div>
        <img src={bg} className="img-fluid" alt="Responsive image"/>
      </div>
    );
  }


export default Greeting;