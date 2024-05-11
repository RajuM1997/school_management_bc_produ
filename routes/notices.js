const express = require("express");
const {
  getAllNotice,
  getSingleNotice,
  deleteNotice,
  updateNotice,
  createNotice,
} = require("../controllers/notice.js");

const router = express.Router();

//Create
router.post("/", createNotice);

//Update
router.put("/:id", updateNotice);

//Delete
router.delete("/:id", deleteNotice);

//Delete
router.get("/:id", getSingleNotice);

//Get all
router.get("/", getAllNotice);

module.exports = router;
