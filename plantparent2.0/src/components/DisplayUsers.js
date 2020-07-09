import React, { useState, useEffect } from "react";
import Users from "./Users";

function DisplayUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((response) => response.json())
      .then((result) => {
        setUsers(result);
      });
  });

  return (
    <div>
      <Users users={users} />
    </div>
  );
}

export default DisplayUsers;
