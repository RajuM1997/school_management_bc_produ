const Student = require("../models/Student.js");

const createStudent = async (req, res, next) => {
  const newStudent = new Student(req.body);
  try {
    const savedStudent = await newStudent.save();
    res.status(201).json(savedStudent);
  } catch (err) {
    next(err);
  }
};

const updateStudent = async (req, res, next) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedStudent);
  } catch (err) {
    next(err);
  }
};

const deleteStudent = async (req, res, next) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.status(200).json("Student has been deleted");
  } catch (err) {
    next(err);
  }
};

const getSingleStudent = async (req, res, next) => {
  try {
    const student = await Student.findById(req.params.id);
    res.status(200).json(student);
  } catch (err) {
    next(err);
  }
};

const getAllStudent = async (req, res, next) => {
  const { ...others } = req.query;
  console.log(others);
  try {
    const student = await Student.find({ ...others });
    res.status(200).json(student);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createStudent,
  updateStudent,
  deleteStudent,
  getSingleStudent,
  getAllStudent,
};
