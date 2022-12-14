const express = require("express");
const CustomerController = require("../controllers/post.controller");
const router = express.Router();

router.get("/posts", CustomerController.getAll);
router.post("/posts", CustomerController.create);
router.get("/posts/:id", CustomerController.getOne);
router.put("/posts/:id", CustomerController.update);
router.delete("/posts/:id", CustomerController.delete);
module.exports = router;
