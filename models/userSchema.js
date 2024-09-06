const mongoose = require("mongoose");

const userSchmema = new mongoose.Schema({
  name:String,
  email:String,
  password: String,
})

const User = mongoose.model("User", userSchmema);
module.exports = User;