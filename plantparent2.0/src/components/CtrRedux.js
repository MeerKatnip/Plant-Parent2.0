import React, { useState } from "react";
import { connect } from "react-redux";
import DisplayCtrRedux from "./DisplayCtrRedux";

function CtrRedux(props) {
  const handleIncrement = () => {
    props.onIncrement();
  };

  return (
    <div>
      <h1>{props.ctr}</h1>
      <button onClick={() => props.onIncrement()}>Increment</button>
      <button onClick={() => props.onAddition()}>Increment 10</button>
      <DisplayCtrRedux />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch({ type: "INC" }),
    onAddition: () => dispatch({ type: "ADD", value: 10 }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CtrRedux);
