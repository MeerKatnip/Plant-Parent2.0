const express = require("express");
const app = express();
const cors = require("cors");
var jwt = require('jsonwebtoken')
const models = require('./models')
const bcrypt = require('bcrypt')
const dotenv = require('dotenv')

dotenv.config()
app.use(cors());
app.use(express.json())



app.post("/api/login", async(req, res) => {
  const email = req.body.email
  const password = req.body.password



const user = await models.User.findOne({
  where: {
    email: email
  }
})
console.log(user)

if(user) {
  const isUser = await bcrypt.compare(password, user.password)
  if(isUser) {
     //create a token
     console.log(process.env.JWT_KEY)
  const token = jwt.sign({email: email}, process.env.JWT_KEY)

  res.json({success: true, token: token})
  } else {
    res.json({success: false})
  }
 
  } else {
    res.json({success: false})
  }

  
})

app.post('/api/register', async(req, res) => {
  const email = req.body.email
  const password = await bcrypt.hash( req.body.password, 10)
  try{
    const user = await models.User.create({email: email, password: password})
    console.log(user)
    res.send(user)
  } catch (error){
    console.log(error)
    res.send(error)
  }
  
  
})


app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(3001, () => {
  console.log("Server is running...");
});
