const mongoose = require("mongoose");

mongoose.connect(process.env.MONGOURL)
  .then(() => console.log("Connected to MongoDB"))    
  .catch(err => console.error("Could not connect to MongoDB", err));