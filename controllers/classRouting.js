const ClassRouting = require("../models/ClassRouting.js");

const createClassRouting = async (req, res, next) => {
  const newClassRouting = new ClassRouting(req.body);
  try {
    const savedClassRouting = await newClassRouting.save();
    res.status(201).json(savedClassRouting);
  } catch (err) {
    next(err);
  }
};

const updateClassRouting = async (req, res, next) => {
  try {
    const updatedClassRouting = await ClassRouting.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedClassRouting);
  } catch (err) {
    next(err);
  }
};

const deleteClassRouting = async (req, res, next) => {
  try {
    await ClassRouting.findByIdAndDelete(req.params.id);
    res.status(200).json("Class routing has been deleted");
  } catch (err) {
    next(err);
  }
};

const getSingleClassRouting = async (req, res, next) => {
  try {
    const classRouting = await ClassRouting.findById(req.params.id);
    res.status(200).json(classRouting);
  } catch (err) {
    next(err);
  }
};

const getAllClassRouting = async (req, res, next) => {
  try {
    const classRouting = await ClassRouting.find();
    res.status(200).json(classRouting);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createClassRouting,
  updateClassRouting,
  deleteClassRouting,
  getSingleClassRouting,
  getAllClassRouting,
};
