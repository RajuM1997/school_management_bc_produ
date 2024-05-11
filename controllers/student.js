const Student = require("../models/Student.js");
const { parseISO, format, startOfDay, isSameDay } = require("date-fns");

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

  if (others.userId === "" || !others.userId) {
    delete others.userId;
  }
  if (others.username === "" || !others.username) {
    delete others.username;
  }
  if (others.rollNumber === "" || !others.rollNumber) {
    delete others.rollNumber;
  }
  if (others.class === "" || !others.class) {
    delete others.class;
  }
  console.log(others);
  try {
    const student = await Student.find({ ...others });
    res.status(200).json(student);
  } catch (err) {
    next(err);
  }
};
const getUserResult = async (req, res, next) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    const examTypes = student.examMarks.map((item) => item.examType);

    res.status(200).json({
      student,
      examTypes,
    });
  } catch (err) {
    next(err);
  }
};

const getMonthlyFee = async (req, res, next) => {
  try {
    const students = await Student.find();
    const allPaidData = students.flatMap((student) => {
      return Array.isArray(student.feeInfo)
        ? student.feeInfo.flatMap((info) => info.paidData || [])
        : [];
    });

    const monthlyTotals = {};
    allPaidData.forEach((data) => {
      const paidDate = parseISO(data.paidDate);
      const monthYear = format(paidDate, "MMMM yyyy");

      if (!monthlyTotals[monthYear]) {
        monthlyTotals[monthYear] = 0;
      }

      monthlyTotals[monthYear] += data.totalPaid || 0;
    });

    const result = Object.keys(monthlyTotals).map((key) => ({
      monthName: key,
      paidAmount: monthlyTotals[key],
    }));

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const getDailyFee = async (req, res, next) => {
  try {
    const { date } = req.query;
    if (!date) {
      return res
        .status(400)
        .json({ error: "Date query parameter is required" });
    }

    const targetDate = startOfDay(parseISO(date));
    const students = await Student.find();

    const allPaidData = students.flatMap((student) => {
      return Array.isArray(student.feeInfo)
        ? student.feeInfo.flatMap((info) => info.paidData || [])
        : [];
    });

    const dailyPaidData = allPaidData.filter((data) => {
      const paidDate = startOfDay(parseISO(data.paidDate));
      console.log({ targetDate });
      console.log({ paidDate });
      return isSameDay(paidDate, targetDate);
    });

    const totalPaid = dailyPaidData.reduce(
      (sum, data) => sum + (data.totalPaid || 0),
      0
    );

    res.status(200).json({ date: targetDate, totalPaid });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createStudent,
  updateStudent,
  deleteStudent,
  getSingleStudent,
  getAllStudent,
  getUserResult,
  getMonthlyFee,
  getDailyFee,
};
