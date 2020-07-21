import React, { useState, useEffect } from "react";
// import Plants from "./Plants";
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
    console.log(vegId)
  },[]) 

    return (
      <span>
        <Breadcrumb>
          <Breadcrumb.Item href="/plantmain">Explore Plants</Breadcrumb.Item>
          <Breadcrumb.Item active>{singlePlant.Name}</Breadcrumb.Item>
        </Breadcrumb>
        <h1>Plant Details</h1>
        <h2>{singlePlant.Name}</h2>
        <img src={singlePlant.ThumbnailImage} />
        <p>{singlePlant.Description}</p>
        Light: {singlePlant.Light} <br/>
        Water: {singlePlant.Watering} <br/>
        Season: {singlePlant.Season} <br/>
        Seed Depth: {singlePlant.SeedDepth} <br/>
        Germination Soil Temp: {singlePlant.GerminationSoilTemp}<br/>
        Days to Germination: {singlePlant.DaysToGermination}<br/>
        Sow Indoors: {singlePlant.SowIndoors}<br/>
        Sow Outdoors: {singlePlant.SowOutdoors}<br/>
        Soil PH Range: {singlePlant.PhRange}<br/>
        Growing Soil Temp: {singlePlant.GrowingSoilTemp}<br/>
        Spacing between Beds: {singlePlant.SpacingBeds}<br/>
        Good Companions: {singlePlant.GoodCompanions}<br/>
        Bad Companions: {singlePlant.BadCompanions}<br/>
        <p>Sowing Description: {singlePlant.SowingDescription}</p>
        <p>Growing Description: {singlePlant.GrowingDescription}</p>
        <p>Harvest Description: {singlePlant.HarvestDescription}</p>
        Days to Harvest Seeds: {singlePlant.DaysToHarvestSeeds}<br/>
        Days to Harvest Seedlings: {singlePlant.DaysToHarvestSeedlings}<br/>
    
      </span>
    )
      
  }

  const mapStateToProps = (state) => {
    
    return {
      plants: state.plants
  }
  }


export default connect(mapStateToProps)(PlantDetails);


