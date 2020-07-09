import React, { useState, useEffect } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    props.onIncrement(count);
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <b>---------Counter Component---------------</b>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment [Counter]</button>
    </div>
  );
}

export default Counter;

// import React, { useState } from "react";
// import Menu from "../components/Menu";
// import Counter from "../components/Counter";
// import Plants from "../components/Plants";
// import TextInput from "../components/TextInput";
// import PlantMain from "../PlantMain";
// import Home from "../components/Home";
// import AnotherCounter from "./AnotherCounter";

// function BaseLayout(props) {
//   const [count, setCount] = useState(0);

//   const handleIncrementCallback = (ctr) => {
//     setCount(ctr);
//     console.log("handleIncrementCallback in Baselayout.js", ctr);
//   };

//   return (
//     <div>
//       <h2>App Component Counter {count}</h2>
//       <Counter onIncrement={handleIncrementCallback} />
//       <AnotherCounter ctr={count} />
//       <a href="http://www.amycodes.me">Amycodes.me 2020</a>
//     </div>
//   );
// }

// export default BaseLayout;

//allows child to update parent using a callback function, baselayout.js is parent and counter.js is child

//child cannot directly talk to siblings, which are other child components. But the child can talk to the parent, and the parent can talk to the sibling child.

//AnotherCounter.js is the sibling of counter.js. Pass the properties from the parent to the additional child.

//to reduce chaining, you can set a Global State. This allows any children to access the properties without having to back out through multiple parents.
