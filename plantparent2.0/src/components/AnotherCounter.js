import React from "react";

function AnotherCounter(props) {
  return (
    <div>
      <h1>Another Counter</h1>
      <h3>{props.ctr}</h3>
    </div>
  );
}

export default AnotherCounter;
