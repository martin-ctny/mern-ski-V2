const Booking = require("../models/Booking.model");
const Post = require("../models/Post");
const Shop = require("../models/Shop.model");

const BookingController = {
  create: async (req, res) => {
    try {
      const booking = new Booking(req.body);
      const newBooking = await booking.save();

      const post = await Post.findById(newBooking.post);
      post.booking.push(newBooking._id);
      post.isAvailable = false;
      await post.save();

      const shop = await Shop.findById(newBooking.shop);
      shop.booking.push(newBooking._id);
      await shop.save();

      res.send(newBooking);
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  },
  get: async (req, res) => {
    try {
      const bookings = await Booking.find();
      res.send(bookings);
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  },
  delete: async (req, res) => {
    try {
      const booking = await Booking.findByIdAndDelete(req.params.id);
      res.send(booking);
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  },
};

module.exports = BookingController;
