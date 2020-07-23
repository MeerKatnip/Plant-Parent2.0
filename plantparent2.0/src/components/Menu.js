import React from "react";
import '../App.css'
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

function Menu() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>
            <NavLink to="/">
            <img
              src="/logonavbar.png"
              width="150"
              height="40"
              className="d-inline-block align-top"
              alt="Plant Parent logo"
            /></NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavLink to="/mygreenhouse">My Greenhouse</NavLink>
              <NavLink to="/plantmain">Explore Plants</NavLink>
              <NavLink to="/aboutus">About Us</NavLink>
            </Nav>
            
            <Nav className="ml-auto">
            <NavLink to="/register">Register</NavLink>
              <NavLink to="/login">Login</NavLink>
            </Nav>
            
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }


export default Menu;

{
  /* <ul>
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
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
        </ul> */
}

//dropdown element
{/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}

//search bar element
{/* <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}