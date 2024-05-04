const mongoose = require("mongoose");

const BookListSchema = new mongoose.Schema(
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
module.exports = mongoose.model("BookList", BookListSchema);
