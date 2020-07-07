const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

let usersArray = [
  { name: "John Doe", age: "56" },
  { name: "Mary Smith", age: "57" },
];

app.get("/users", (req, res) => {
  res.json(usersArray);
});

app.listen(3001, () => {
  console.log("Server is running...");
});
