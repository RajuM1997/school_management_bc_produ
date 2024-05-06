const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema(
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
    employeeId: {
      type: String,
    },
    nationalID: {
      type: String,
    },
    passportID: {
      type: String,
    },
    maritalStatus: {
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
    gender: {
      type: String,
      required: true,
    },
    fatherName: {
      type: String,
      required: true,
    },
    motherName: {
      type: String,
      required: true,
    },
    role: {
      type: String,
    },
    sscResult: {
      type: Object,
    },
    hscResult: {
      type: Object,
    },
    graduationResult: {
      type: Object,
    },
    mastersResult: {
      type: Object,
    },
    experience: {
      type: Object,
    },
    photo: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Employee", EmployeeSchema);
