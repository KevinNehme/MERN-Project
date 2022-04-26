const express = require("express");

const router = express.Router();

//import
const { createOrupdateUser } = require("../controllers/auth");

router.get("/create-or-update-user", createOrupdateUser);

module.exports = router;
