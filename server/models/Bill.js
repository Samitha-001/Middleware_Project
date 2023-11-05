const mongoose = require("mongoose");

const billSchema = new mongoose.Schema({
  title: String,
  price: Number,
//   dateOfCreate: String,
//   commnets: Number,
  
  // Add other fields as needed
});

const Bill = mongoose.model("Bill", billSchema);

module.exports = Bill;
