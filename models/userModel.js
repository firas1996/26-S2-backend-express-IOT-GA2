const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 6,
    maxlength: 20,
    required: [true, "The name is required !!!!"],
  },
  email: {
    type: String,
    required: [true, "The email is required !!!!"],
    validate: [validator.isEmail, "Email is not valid !!!!"],
    unique: true,
    lowercase: true,
    // uppercase: true,
  },
  password: {},
});

const User = mongoose.model("User", userSchema);

module.exports = User;
