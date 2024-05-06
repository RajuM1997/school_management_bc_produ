const mongoose = require("mongoose");

const ClassRoutingSchema = new mongoose.Schema(
  {
    className: {
      type: String,
      required: true,
    },
    file: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("ClassRouting", ClassRoutingSchema);
