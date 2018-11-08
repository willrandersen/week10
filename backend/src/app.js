const express = require("express");
const mongoose = require("mongoose");

var cors = require('cors')


var Item = require("./models/item");

const app = express();

app.use(cors())
app.get("/", function(req, res) {
  res.send("Hello World");
});

app.get("/add/:name", function(req, res) {
  var item = new Item({ name: req.params.name });
  item.save();
  console.log("Added Item " + req.params.name);
  res.send("Added Item " + req.params.name);
});

app.get("/all", async function(req, res) {
  const items = await Item.find();
  console.log("All Items In The Database");
  console.log(items);
  res.send(items);
});

app.listen(8000, function() {
  console.log("listening on http://localhost:8000");
});
