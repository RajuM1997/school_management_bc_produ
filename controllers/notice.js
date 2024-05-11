const Notice = require("../models/Notice.js");

const createNotice = async (req, res, next) => {
  const newNotice = new Notice(req.body);
  try {
    const savedNotice = await newNotice.save();
    res.status(201).json(savedNotice);
  } catch (err) {
    next(err);
  }
};

const updateNotice = async (req, res, next) => {
  try {
    const updatedNotice = await Notice.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedNotice);
  } catch (err) {
    next(err);
  }
};

const deleteNotice = async (req, res, next) => {
  try {
    await Notice.findByIdAndDelete(req.params.id);
    res.status(200).json("Notice list has been deleted");
  } catch (err) {
    next(err);
  }
};

const getSingleNotice = async (req, res, next) => {
  try {
    const notice = await Notice.findById(req.params.id);
    res.status(200).json(notice);
  } catch (err) {
    next(err);
  }
};

const getAllNotice = async (req, res, next) => {
  try {
    const notice = await Notice.find();
    res.status(200).json(notice);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createNotice,
  updateNotice,
  deleteNotice,
  getSingleNotice,
  getAllNotice,
};
