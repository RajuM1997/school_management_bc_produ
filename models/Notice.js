const mongoose = require("mongoose");

const NoticeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    file: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Notice", NoticeSchema);
