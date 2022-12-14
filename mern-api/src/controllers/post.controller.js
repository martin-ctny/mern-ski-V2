const Post = require("../models/Post");

const PostController = {
  create: async (req, res) => {
    try {
      const post = new Post(req.body);
      const newPost = await post.save();
      res.send(newPost);
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  },
  update: async (req, res) => {
    try {
      const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.send(post);
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  },
  delete: async (req, res) => {
    try {
      const post = await Post.findByIdAndDelete(req.params.id);
      res.status(204).send({ message: "Post deleted" });
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  },
  getAll: async (req, res) => {
    try {
      const posts = await Post.find().populate("booking").populate("comments");

      res.send(posts);
    } catch (err) {
      res.status(404).send({ message: err.message });
    }
  },
  getOne: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id)
        .populate("comments")
        .populate("booking");
      res.send(post);
    } catch (err) {
      res.status(404).send({ message: err.message });
    }
  },
};

module.exports = PostController;
