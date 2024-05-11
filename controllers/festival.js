const Festival = require("../models/Festival.js");

const createFestival = async (req, res, next) => {
  const newFestival = new Festival(req.body);
  try {
    const savedFestival = await newFestival.save();
    res.status(201).json(savedFestival);
  } catch (err) {
    next(err);
  }
};

const updateFestival = async (req, res, next) => {
  try {
    const updatedFestival = await Festival.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedFestival);
  } catch (err) {
    next(err);
  }
};

const deleteFestival = async (req, res, next) => {
  try {
    await Festival.findByIdAndDelete(req.params.id);
    res.status(200).json("Festival list has been deleted");
  } catch (err) {
    next(err);
  }
};

const getSingleFestival = async (req, res, next) => {
  try {
    const festival = await Festival.findById(req.params.id);
    res.status(200).json(festival);
  } catch (err) {
    next(err);
  }
};

const getAllFestival = async (req, res, next) => {
  try {
    const festival = await Festival.find();
    res.status(200).json(festival);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createFestival,
  updateFestival,
  deleteFestival,
  getSingleFestival,
  getAllFestival,
};
