import React, { useState, useEffect } from "react";
import Plants from "./Plants";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { connect } from 'react-redux'



function PlantDetails(props) {
     const [singlePlant, setSinglePlant] = useState({})

  useEffect(() => {


    let vegId = props.match.params.vegetableId 
    let plant = props.plants.find(veg => {
      return veg.VegetableId == vegId
    })

    setSinglePlant(plant)
    console.log(plant)
  },[])

    return (
      <span>
        <Breadcrumb>
          <Breadcrumb.Item href="/plantmain">Explore Plants</Breadcrumb.Item>
          <Breadcrumb.Item active>Plant Details</Breadcrumb.Item>
        </Breadcrumb>
        <h1>Plant Details</h1>
    <p>{singlePlant.Name}</p>
      </span>
    )
      
  }

  const mapStateToProps = (state) => {
    return {
      plants: state.plants
  }
  }


export default connect(mapStateToProps)(PlantDetails);


