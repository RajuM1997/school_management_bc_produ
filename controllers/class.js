const Class = require("../models/Class.js");

const createClass = async (req, res, next) => {
  const newClass = new Class(req.body);
  try {
    const savedClass = await newClass.save();
    res.status(201).json(savedClass);
  } catch (err) {
    next(err);
  }
};

const updateClass = async (req, res, next) => {
  try {
    const updatedClass = await Class.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedClass);
  } catch (err) {
    next(err);
  }
};

const deleteClass = async (req, res, next) => {
  try {
    await Class.findByIdAndDelete(req.params.id);
    res.status(200).json("Book list has been deleted");
  } catch (err) {
    next(err);
  }
};

const getSingleClass = async (req, res, next) => {
  const { className } = req.query;
  console.log(className);
  console.log(req.query);
  try {
    const studentClass = !className
      ? await Class.findById(req.params.id)
      : await Class.findOne({ class: className });
    res.status(200).json(studentClass);
  } catch (err) {
    next(err);
  }
};

const getAllClass = async (req, res, next) => {
  try {
    const studentClass = await Class.find();
    res.status(200).json(studentClass);
  } catch (err) {
    next(err);
  }
};

const getFilterClass = async (req, res, next) => {
  const { className } = req.query;
  try {
    const studentClass = await Class.findOne({ class: className });
    res.status(200).json(studentClass);
  } catch (err) {
    next(err);
  }
};

const getTeacherClass = async (req, res, next) => {
  const { teacherName } = req.query; // Extract the teacher name from the query

  try {
    if (!teacherName) {
      return res.status(400).json({ message: "Teacher name is required" }); // Return error if no teacherName
    }

    // Find documents where the 'teacher' array contains an object with the specified 'teacherName'
    const teacherClass = await Class.find({
      teacher: { $elemMatch: { teacherName } },
    });

    if (teacherClass.length > 0) {
      res.status(200).json(teacherClass); // Return the found class(es)
    } else {
      res.status(404).json({ message: "Class not found for this teacher" }); // No match
    }
  } catch (err) {
    next(err); // Pass the error to error handling middleware
  }
};

module.exports = {
  createClass,
  updateClass,
  deleteClass,
  getSingleClass,
  getAllClass,
  getFilterClass,
  getTeacherClass,
};
