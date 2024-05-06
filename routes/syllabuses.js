const express = require("express");
const {
  getAllSyllabus,
  getSingleSyllabus,
  deleteSyllabus,
  updateSyllabus,
  createSyllabus,
} = require("../controllers/syllabus.js");

const router = express.Router();

//Create
router.post("/", createSyllabus);

//Update
router.put("/:id", updateSyllabus);

//Delete
router.delete("/:id", deleteSyllabus);

//Delete
router.get("/:id", getSingleSyllabus);

//Get all
router.get("/", getAllSyllabus);

module.exports = router;
