import React, { useState } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions/actionTypes";

function NewUser(props) {
  const [addUsername, setAddUsername] = useState("");

  const handleTextBoxChange = (e) => {
    setAddUsername(e.target.value);
  };

  const handleAddUsername = () => {
    props.onUsernameAdded(addUsername);
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Enter Email Address"
        name="username"
        onChange={handleTextBoxChange}
      />
      <button onClick={handleAddUsername}>Create Account</button>
    </div>
  );
}

// const mapStateToProps = (state) => {
//     return {
//         ctr: state.counter
//     }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    onUsernameAdded: (newUsername) =>
      dispatch({
        type: actionTypes.USER_ADDED,
        payload: { name: newUsername, zipcode: 77777 },
      }),
  };
};

export default connect(mapDispatchToProps)(NewUser);
