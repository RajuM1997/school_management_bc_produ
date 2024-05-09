const { log } = require("console");
const Employee = require("../models/Employee.js");

const createEmployee = async (req, res, next) => {
  const newEmployee = new Employee(req.body);
  try {
    const savedEmployee = await newEmployee.save();
    res.status(201).json(savedEmployee);
  } catch (err) {
    next(err);
  }
};

const updateEmployee = async (req, res, next) => {
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedEmployee);
  } catch (err) {
    next(err);
  }
};

const deleteEmployee = async (req, res, next) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.status(200).json("Book list has been deleted");
  } catch (err) {
    next(err);
  }
};

const getSingleEmployee = async (req, res, next) => {
  try {
    const employee = await Employee.findById(req.params.id);
    res.status(200).json(employee);
  } catch (err) {
    next(err);
  }
};

const getAllEmployee = async (req, res, next) => {
  const { ...others } = req.query;
  console.log(others);
  try {
    const employee = await Employee.find({
      ...others,
    });
    res.status(200).json(employee);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getSingleEmployee,
  getAllEmployee,
};
