const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hello World this is docker with nodemon");
});

const conectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb://root:secret@mongo:27017/products?authSource=admin"
    );
    console.log("Connected to mongoDB");
  } catch (error) {
    console.log(error);
  }
};
mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected");
});
mongoose.connection.on("connected", () => {
  console.log("mongoDB connected");
});
app.listen(port, () => {
  conectDb();
  console.log(`server is running on port ${port}`);
});
