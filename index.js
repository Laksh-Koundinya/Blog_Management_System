const mongoose = require("mongoose");
const express = require("express");
const url = "mongodb://localhost:27017";
const adminRoute = require("./routes/adminRoutes");
const blogValidatorMiddleware = require("./middlewares/blogValidator");
mongoose.connect(url);
const app = express();
app.use(blogValidatorMiddleware.isBlogAvailableValidator);

app.use("/", adminRoute);

app.listen(3000, () => {
  console.log("Server Started");
});
