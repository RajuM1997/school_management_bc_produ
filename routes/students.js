const express = require("express");
const {
  getAllStudent,
  getSingleStudent,
  deleteStudent,
  updateStudent,
  createStudent,
} = require("../controllers/student.js");

const router = express.Router();

//Create
router.post("/", createStudent);

//Update
router.put("/:id", updateStudent);

//Delete
router.delete("/:id", deleteStudent);

//Delete
router.get("/:id", getSingleStudent);

//Get all
router.get("/", getAllStudent);

module.exports = router;
