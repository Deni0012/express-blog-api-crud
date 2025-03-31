const express = require("express");
const postController = require("../controller/postController.js");
const router = express.Router();

//index
router.get("/", postController.index);

//show
router.get("/:id", postController.show);

//store
router.post("/", postController.store);

//update
router.put("/:id", postController.update);

//patch
router.patch("/:id", postController.patch);

//destroy
router.delete("/:id", postController.destroy);




module.exports = router;