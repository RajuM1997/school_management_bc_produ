const express = require("express");
const {
  getAllClassRouting,
  getSingleClassRouting,
  deleteClassRouting,
  updateClassRouting,
  createClassRouting,
} = require("../controllers/classRouting.js");

const router = express.Router();

//Create
router.post("/", createClassRouting);

//Update
router.put("/:id", updateClassRouting);

//Delete
router.delete("/:id", deleteClassRouting);

//Delete
router.get("/:id", getSingleClassRouting);

//Get all
router.get("/", getAllClassRouting);

module.exports = router;
