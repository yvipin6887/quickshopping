
const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/adminpim";
const db = {
  url,
  mongoose
};
module.exports = db;