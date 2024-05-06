const express = require("express");
const { login, adminLogin } = require("../controllers/auth");

const router = express.Router();

//Get all
router.post("/", login);

//Get all
router.post("/admin", adminLogin);

module.exports = router;
