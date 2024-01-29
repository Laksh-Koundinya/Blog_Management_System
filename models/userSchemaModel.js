const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  userName: { type: String, required: true },
  userEmail: { type: String, required: true },
  userPassword: { type: String, required: true },
  isAdmin: { type: String, required: true },
  token: { type: String, default: "" },
});

module.exports = mongoose.model("User", userSchema);
