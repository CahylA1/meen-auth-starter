// Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// User Schema
const userSchema = Schema({
  email: { type: String, unique: true, require: true },
  password: { type: String, required: true },
});

//User Model
const User = mongoose.model("User", userSchema)

// Export User Model
module.exports = User
