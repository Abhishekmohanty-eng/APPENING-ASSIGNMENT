const express = require("express");
const router = express.Router();
const authorController = require("../controller/authorController");
const middleWare = require("../middleware/auth")

router.post("/createAuthor", authorController.createAuthor)
router.post("/loginUser", authorController.login)


module.exports = router;