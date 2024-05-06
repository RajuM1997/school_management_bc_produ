const Syllabus = require("../models/Syllabus.js");

const createSyllabus = async (req, res, next) => {
  const newSyllabus = new Syllabus(req.body);
  try {
    const savedSyllabus = await newSyllabus.save();
    res.status(201).json(savedSyllabus);
  } catch (err) {
    next(err);
  }
};

const updateSyllabus = async (req, res, next) => {
  try {
    const updatedSyllabus = await Syllabus.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedSyllabus);
  } catch (err) {
    next(err);
  }
};

const deleteSyllabus = async (req, res, next) => {
  try {
    await Syllabus.findByIdAndDelete(req.params.id);
    res.status(200).json("Syllabus has been deleted");
  } catch (err) {
    next(err);
  }
};

const getSingleSyllabus = async (req, res, next) => {
  try {
    const syllabus = await Syllabus.findById(req.params.id);
    res.status(200).json(syllabus);
  } catch (err) {
    next(err);
  }
};

const getAllSyllabus = async (req, res, next) => {
  try {
    const syllabus = await Syllabus.find();
    res.status(200).json(syllabus);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createSyllabus,
  updateSyllabus,
  deleteSyllabus,
  getSingleSyllabus,
  getAllSyllabus,
};
