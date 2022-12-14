const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  weight: {
    type: Number,
  },
  size: {
    type: Number,
  },
  style: {
    type: String,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  booking: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
    },
  ],
  isAvailable: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Post", postSchema);
