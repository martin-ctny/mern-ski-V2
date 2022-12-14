const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("strictQuery", true);

module.exports = async () => {
  try {
    await mongoose.connect(`mongodb://root:root@localhost:27017`);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB", error.message);
  }
};
