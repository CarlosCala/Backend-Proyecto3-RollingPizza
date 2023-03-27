import mongoose, { connection } from "mongoose";

// const url = "mongodb://127.0.0.1:27017/rollingPizza";

const url = 'mongodb+srv://bellaPizza:a4yaii7fIu6kzM4z@cluster0.swomave.mongodb.net/rollingPizza'

mongoose.connect(url);

const connections = mongoose.connection;

connections.once("open", () => {
  console.log("BD conectada");
});
