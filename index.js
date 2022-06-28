const express = require("express");
const app = express();

app.use("/", express.static(__dirname + "/public"));

const StaticmanAPI = require('./server')

const api = new StaticmanAPI()

api.start(port => {
  console.log('Staticman API running on port', port)
})
