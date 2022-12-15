const express = require("express");
const ShopController = require("../controllers/shop.controller");
const router = express.Router();

router.get("/shops", ShopController.getAll);
router.get("/shops/:id", ShopController.getOne);
router.post("/shops", ShopController.create);

module.exports = router;
