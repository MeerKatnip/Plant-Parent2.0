const initialState = {
  counter: 99,
  name: "John Doe",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
      return {
        ...state,
        counter: state.counter + 1,
      };
  }

  //ALTERNATIVE IF/ELSE instead of SWITCH above. Switch is preferred:
  //   if (action.type == "INC") {
  //     return {
  //       ...state,
  //       counter: state.counter + 1,
  //     };
  //   } else if (action.type == "ADD") {
  //     return {
  //       ...state,
  //       counter: state.counter + action.value,
  //     };
  //   }
  return state;
};

export default reducer;
