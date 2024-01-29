const blogSetting = require("../models/blogSettingsModel");

const isBlogAvailableValidator = async (req, res, next) => {
  try {
    const blog = await blogSetting.find({});
    if (blog.length == 0 && req.originalUrl != "/blogSetup") {
      res.redirect("/blogSetup");
    } else {
      next();
    }
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = {
  isBlogAvailableValidator,
};
