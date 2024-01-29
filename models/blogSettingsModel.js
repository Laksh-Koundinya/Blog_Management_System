const mongoose = require("mongoose");

const blogSettingSchema = mongoose.Schema({
  blogTitle: { type: String, required: true },
  blogImage: { type: String, required: true },
  blogInfo: { type: String, required: true },
});

module.exports = mongoose.model("BlogSettings", blogSettingSchema);
