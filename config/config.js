const mongoose = require("mongoose");
require("colors");

const url = "mongodb+srv://pavi:pavi@cluster0.ddyxg.mongodb.net/posapp?retryWrites=true&w=majority"

//connecDB Function

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(url);
    console.log(`MongoDB Connected ${conn.connection.host}`.bgYellow);
  } catch (error) {
    console.log(`Error : ${error.message}`.bgRed);
    process.exit(1);
  }
};

//export
module.exports = connectDb;