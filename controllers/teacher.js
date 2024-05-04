const Teacher = require("../models/Teacher.js");

const createTeacher = async (req, res, next) => {
  const newTeacher = new Teacher(req.body);
  try {
    const savedTeacher = await newTeacher.save();
    res.status(201).json(savedTeacher);
  } catch (err) {
    next(err);
  }
};

const updateTeacher = async (req, res, next) => {
  try {
    const updatedTeacher = await Teacher.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedTeacher);
  } catch (err) {
    next(err);
  }
};

const deleteTeacher = async (req, res, next) => {
  try {
    await Teacher.findByIdAndDelete(req.params.id);
    res.status(200).json("Book list has been deleted");
  } catch (err) {
    next(err);
  }
};

const getSingleTeacher = async (req, res, next) => {
  try {
    const teacher = await Teacher.findById(req.params.id);
    res.status(200).json(teacher);
  } catch (err) {
    next(err);
  }
};

const getAllTeacher = async (req, res, next) => {
  try {
    const teacher = await Teacher.find();
    res.status(200).json(teacher);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createTeacher,
  updateTeacher,
  deleteTeacher,
  getSingleTeacher,
  getAllTeacher,
};
