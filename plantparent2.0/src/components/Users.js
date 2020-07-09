import React, { Component } from "react";

function Users(props) {
  const userList = props.users.map((user) => {
    return <li key={user.userID}>{user.name}</li>;
  });

  return <ul>{userList}</ul>;
}

export default Users;
