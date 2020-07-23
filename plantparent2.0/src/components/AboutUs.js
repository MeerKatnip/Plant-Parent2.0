import React, { Component } from "react";
import {
  IoLogoTwitter,
  IoLogoGithub,
  IoIosDocument,
  IoLogoLinkedin,
} from "react-icons/io";

class AboutUs extends Component {
  render() {
    return (
      <div>
        <h1>About Plant Parent</h1>
      <h3>Plant Parent was designed by Amy Roy as the capstone project for the DigitalCrafts March 2020 cohort.</h3>
    <a href="https://github.com/MeerKatnip" target="_blank">
    <IoLogoGithub size="25%"/></a>
    <a href="https://www.linkedin.com/in/royamy/" target="_blank">
    <IoLogoLinkedin size="25%"/></a>
    <a href="https://twitter.com/AmyCodesMe" target="_blank">
    <IoLogoTwitter size="25%" /></a>
      </div>

      
    )
  }
}

export default AboutUs;
