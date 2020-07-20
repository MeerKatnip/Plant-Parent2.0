const initialState = {
  plants: []
};

const reducer = (state = initialState, action) => {

  if(action.type === "PLANTS_FETCHED") {
    return {
      ...state,
      plants: action.payload
    }
  }

  // switch (action.type) {
  //   case "INC":
  //     return {
  //       ...state,
  //       plants: state.counter + 1,
  //     };
  // }

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
