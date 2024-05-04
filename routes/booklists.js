const express = require("express");
const {
  getAllBookList,
  getSingleBookList,
  deleteBookList,
  updateBookList,
  createBookList,
} = require("../controllers/bookList.js");

const router = express.Router();

//Create
router.post("/", createBookList);

//Update
router.put("/:id", updateBookList);

//Delete
router.delete("/:id", deleteBookList);

//Delete
router.get("/:id", getSingleBookList);

//Get all
router.get("/", getAllBookList);

module.exports = router;
