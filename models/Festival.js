const mongoose = require("mongoose");

const FestivalSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    year: {
      type: String,
    },
    photo: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Festival", FestivalSchema);
