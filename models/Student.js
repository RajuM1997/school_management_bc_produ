const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    religion: {
      type: String,
      required: true,
    },
    nationality: {
      type: String,
      required: true,
    },
    birthDate: {
      type: String,
      required: true,
    },
    rollNumber: {
      type: String,
      required: true,
    },
    registrationNumber: {
      type: String,
      required: true,
    },
    birthRegistrationNo: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    registrationDate: {
      type: String,
      required: true,
    },
    admissionType: {
      type: String,
    },
    waiver: {
      type: Object,
    },
    feeInfo: {
      type: [],
    },
    class: {
      type: String,
      required: true,
    },
    section: {
      type: String,
    },
    shift: {
      type: String,
    },
    gender: {
      type: String,
      required: true,
    },
    parentDetailsFather: {
      type: Object,
      required: true,
    },
    parentDetailsMother: {
      type: Object,
      required: true,
    },
    examMarks: {
      type: Array,
    },
    waiver: {
      type: Object,
    },
    photo: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Student", StudentSchema);
