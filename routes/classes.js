const express = require("express");
const {
  getAllClass,
  getSingleClass,
  deleteClass,
  updateClass,
  createClass,
  getFilterClass,
  getTeacherClass,
} = require("../controllers/class.js");

const router = express.Router();

//Create
router.post("/", createClass);

//Update
router.put("/:id", updateClass);

//Delete
router.delete("/:id", deleteClass);

//Delete
router.get("/:id", getSingleClass);

//Delete
router.get("/filter-class", getFilterClass);

//Delete
router.get("/teacher-class/filter", getTeacherClass);

//Get all
router.get("/", getAllClass);

module.exports = router;
