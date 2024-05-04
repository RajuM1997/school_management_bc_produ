const mongoose = require("mongoose");

const ClassSchema = new mongoose.Schema(
  {
    year: {
      type: String,
      required: true,
    },
    shift: {
      type: String,
      required: true,
    },
    class: {
      type: String,
      required: true,
    },
    section: {
      type: String,
      required: true,
    },
    teacher: {
      type: [
        {
          teacherName: {
            type: String,
          },
          subject: {
            type: String,
          },
        },
      ],
    },
    subject: {
      type: Array,
    },
    fee: {
      type: Object,
    },
    examName: {
      type: Array,
    },
    status: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Class", ClassSchema);
