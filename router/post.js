const express = require("express");
const postController = require("../controller/postController.js");
const router = express.Router();

//index
router.get("/", postController.index);




module.exports = router;