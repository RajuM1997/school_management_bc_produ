const mongoose = require("mongoose");

const SyllabusSchema = new mongoose.Schema(
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
module.exports = mongoose.model("Syllabus", SyllabusSchema);
