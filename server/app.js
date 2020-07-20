const express = require("express");
const app = express();
const cors = require("cors");
var jwt = require('jsonwebtoken')

app.use(cors());
app.use(express.json())

let users = [
  { email: "Johndoe@email.com", password: "password" },
  { email: "Marysmith@email.com", password: "password" },
];

app.get('/my-plants',(req,res) => {



})



app.post("/api/login", (req, res) => {
  const email = req.body.email
  const password = req.body.password

const persistedUser = users.find(user => {
  return (user.email == email && user.password == password)
})

if(persistedUser) {

  //create a token
  jwt.sign({email: email}, 'keyboard cat')

  res.json({success: true})
} else {
  res.json({success: false})
}

  
})

app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(3001, () => {
  console.log("Server is running...");
});
