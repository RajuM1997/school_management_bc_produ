const mongoose = require("mongoose");

const ExamRoutingSchema = new mongoose.Schema(
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
module.exports = mongoose.model("ExamRouting", ExamRoutingSchema);
