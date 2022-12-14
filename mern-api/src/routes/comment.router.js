const express = require("express");
const router = express.Router();
const CommentController = require("../controllers/comment.controller");

router.post("/comments", CommentController.create);

module.exports = router;
