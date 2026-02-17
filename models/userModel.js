const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
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
  password: {
    type: String,
    required: [true, "The password is required !!!!"],
    minlength: 8,
    // validate: [validator.isStrongPassword, "Your pass must have ...."],
  },
  confirm_password: {
    type: String,
    required: [true, "The password is required !!!!"],
    minlength: 8,
    validate: {
      validator: function (cPass) {
        return cPass === this.password;
      },
      message: "Pass and cPass does not match !!!",
    },
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  password_changed_at: {
    type: Date,
    default: Date.now(),
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
