const express = require("express");
const {
  getAllExamRouting,
  getSingleExamRouting,
  deleteExamRouting,
  updateExamRouting,
  createExamRouting,
} = require("../controllers/examRouting.js");

const router = express.Router();

//Create
router.post("/", createExamRouting);

//Update
router.put("/:id", updateExamRouting);

//Delete
router.delete("/:id", deleteExamRouting);

//Delete
router.get("/:id", getSingleExamRouting);

//Get all
router.get("/", getAllExamRouting);

module.exports = router;
