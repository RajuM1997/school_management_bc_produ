const express = require("express");
const {
  getAllTeacher,
  getSingleTeacher,
  deleteTeacher,
  updateTeacher,
  createTeacher,
} = require("../controllers/teacher.js");

const router = express.Router();

//Create
router.post("/", createTeacher);

//Update
router.put("/:id", updateTeacher);

//Delete
router.delete("/:id", deleteTeacher);

//Delete
router.get("/:id", getSingleTeacher);

//Get all
router.get("/", getAllTeacher);

module.exports = router;
