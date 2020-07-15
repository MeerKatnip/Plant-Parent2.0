import React, { useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";
// import Menu from "./components/Menu";
// import Post from "./components/Post";
// import Counter from "./components/Counter";
import Plants from "./components/Plants";
// import TextInput from "./components/TextInput";
// import Home from "./components/Home";
import { connect } from 'react-redux'


function PlantMain(props) {


  useEffect(() => {

    fetch( "https://cors-anywhere.herokuapp.com/" +
    "http://highoncoding.com/vegetable/getcatalog")
    .then(response => response.json())
    .then(data => {
      props.onPlantsFetched(data)
    })

   
  }, []);
  
    return (
      <div>
       <Plants listOfPlants = {props.plants} />
      </div>
    );

}

const mapStateToProps = (state) => {
  return {
    plants: state.plants
}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPlantsFetched: (data) => dispatch({type: 'PLANTS_FETCHED', payload: data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlantMain);
