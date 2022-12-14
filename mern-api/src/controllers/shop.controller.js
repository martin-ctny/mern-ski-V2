const Shop = require("../models/Shop.model");
const ShopController = {
  create: async (req, res) => {
    try {
      const shop = new Shop(req.body);
      const newShop = await shop.save();
      res.send(newShop);
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  },
  getAll: async (req, res) => {
    try {
      const shops = await Shop.find().populate("posts").populate("booking");
      res.send(shops);
    } catch (err) {
      res.status(404).send({ message: err.message });
    }
  },
  getOne: async (req, res) => {
    try {
      const shop = await Shop.findById(req.params.id)
        .populate("posts")
        .populate("booking");
      res.send(shop);
    } catch (err) {
      res.status(404).send({ message: err.message });
    }
  },
  update: async (req, res) => {
    try {
      const shop = await Shop.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.send(shop);
      return shop;
    } catch (err) {
      res.status(404).send({ message: err.message });
    }
  },
};

module.exports = ShopController;
