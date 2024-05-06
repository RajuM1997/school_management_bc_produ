const express = require("express");
const {
  getAllEmployee,
  getSingleEmployee,
  deleteEmployee,
  updateEmployee,
  createEmployee,
} = require("../controllers/employee.js");

const router = express.Router();

//Create
router.post("/", createEmployee);

//Update
router.put("/:id", updateEmployee);

//Delete
router.delete("/:id", deleteEmployee);

//Delete
router.get("/:id", getSingleEmployee);

//Get all
router.get("/", getAllEmployee);

module.exports = router;
