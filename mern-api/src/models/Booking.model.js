const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  telephoneNumber: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
    required: true,
  },
});

module.exports = mongoose.model("Booking", BookingSchema);
