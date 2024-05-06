const Student = require("../models/Student.js");
const Employee = require("../models/Employee.js");

const login = async (req, res, next) => {
  try {
    const user = await Student.findOne({ userId: req.body.userId });
    if (!user) return res.status(404).json("User not found!");
    const isPasswordCorrect = req.body.password === user.password;
    if (!isPasswordCorrect)
      return res.status(404).json("Wrong password or username");

    const { password, ...otherDetails } = user._doc;
    res.status(200).json({ ...otherDetails });
  } catch (err) {
    next(err);
  }
};
const adminLogin = async (req, res, next) => {
  try {
    const user = await Employee.findOne({ employeeId: req.body.employeeId });
    if (!user) return res.status(404).json("User not found!");
    const isPasswordCorrect = req.body.password === user.password;
    if (!isPasswordCorrect)
      return res.status(404).json("Wrong password or username");

    const { password, ...otherDetails } = user._doc;
    res.status(200).json({ ...otherDetails });
  } catch (err) {
    next(err);
  }
};
module.exports = {
  login,
  adminLogin,
};
