const express = require("express");
const {
  getAllFestival,
  getSingleFestival,
  deleteFestival,
  updateFestival,
  createFestival,
} = require("../controllers/festival.js");

const router = express.Router();

//Create
router.post("/", createFestival);

//Update
router.put("/:id", updateFestival);

//Delete
router.delete("/:id", deleteFestival);

//Delete
router.get("/:id", getSingleFestival);

//Get all
router.get("/", getAllFestival);

module.exports = router;
