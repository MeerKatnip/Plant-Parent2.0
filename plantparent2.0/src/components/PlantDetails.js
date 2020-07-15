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
        <h2>{singlePlant.Name}</h2>
        <img src={singlePlant.ThumbnailImage} />
        <p>{singlePlant.Description}</p>
        Light: {singlePlant.Light}
        Water: {singlePlant.Watering}
        Season: {singlePlant.Season}
        Seed Depth: {singlePlant.SeedDepth}
        Germination Soil Temp: {singlePlant.GerminationSoilTemp}
        Days to Germination: {singlePlant.DaysToGermination}
        Sow Indoors: {singlePlant.SowIndoors}
        Sow Outdoors: {singlePlant.SowOutdoors}
        PH Range: {singlePlant.PhRange}
        Growing Soil Temp: {singlePlant.GrowingSoilTemp}
        Spacing between Beds: {singlePlant.SpacingBeds}
        Good Companions: {singlePlant.GoodCompanions}
        Bad Companions: {singlePlant.BadCompanions}
        <p>Sowing Description: {singlePlant.SowingDescription}</p>
        <p>Growing Description: {singlePlant.GrowingDescription}</p>
        <p>Harvest Description: {singlePlant.HarvestDescription}</p>
        Days to Harvest Seeds: {singlePlant.DaysToHarvestSeeds}
        Days to Harvest Seedlings: {singlePlant.DaysToHarvestSeedlings}
    
      </span>
    )
      
  }

  const mapStateToProps = (state) => {
    return {
      plants: state.plants
  }
  }


export default connect(mapStateToProps)(PlantDetails);


