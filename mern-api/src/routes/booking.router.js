const express = require("express");
const router = express.Router();
const BookingController = require("../controllers/Booking.controller");

router.post("/booking", BookingController.create);
router.get("/booking", BookingController.get);

module.exports = router;
