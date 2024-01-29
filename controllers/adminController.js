const blogOne = async (req, res) => {
  res.send("One");
};

const blogTwo = async (req, res) => {
  res.send("Two");
};

const blogSetup = async (req, res) => {
  res.send("Set");
};

module.exports = {
  blogOne,
  blogTwo,
  blogSetup,
};
