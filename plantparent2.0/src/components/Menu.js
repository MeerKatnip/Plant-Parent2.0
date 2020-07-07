import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Menu extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/plantmain">Explore Plants</NavLink>
          </li>
          <li>
            <NavLink to="/addplant">Add Plant</NavLink>
          </li>
          <li>
            <NavLink to="/plantdetails/:VegetableCode">Plant Details</NavLink>
          </li>
          <li>
            <NavLink to="/displayusers">Display Users</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;