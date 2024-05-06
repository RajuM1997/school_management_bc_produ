const ExamRouting = require("../models/ExamRouting.js");

const createExamRouting = async (req, res, next) => {
  const newExamRouting = new ExamRouting(req.body);
  try {
    const savedExamRouting = await newExamRouting.save();
    res.status(201).json(savedExamRouting);
  } catch (err) {
    next(err);
  }
};

const updateExamRouting = async (req, res, next) => {
  try {
    const updatedExamRouting = await ExamRouting.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedExamRouting);
  } catch (err) {
    next(err);
  }
};

const deleteExamRouting = async (req, res, next) => {
  try {
    await ExamRouting.findByIdAndDelete(req.params.id);
    res.status(200).json("Exam routing has been deleted");
  } catch (err) {
    next(err);
  }
};

const getSingleExamRouting = async (req, res, next) => {
  try {
    const examRouting = await ExamRouting.findById(req.params.id);
    res.status(200).json(examRouting);
  } catch (err) {
    next(err);
  }
};

const getAllExamRouting = async (req, res, next) => {
  try {
    const examRouting = await ExamRouting.find();
    res.status(200).json(examRouting);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createExamRouting,
  updateExamRouting,
  deleteExamRouting,
  getSingleExamRouting,
  getAllExamRouting,
};
