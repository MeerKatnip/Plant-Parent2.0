import React, { useState, useEffect } from "react";

function UserInput() {
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);

  const handleTextBoxChange = (e) => {
    // [e.target.name]: e.target.value

    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddUser = () => {
    setUsers(users.concat(user));
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleTextBoxChange}
      />
      <input
        type="text"
        name="age"
        placeholder="Age"
        onChange={handleTextBoxChange}
      />
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
}

export default UserInput;
