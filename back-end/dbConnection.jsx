const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://lokeshcs231117_db_user:IOk222wgZ9Zprk2G@bookmyshow.4qlfbim.mongodb.net/?retryWrites=true&w=majority&appName=BookMyShow"
    );
    console.log("Connect to Database");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
