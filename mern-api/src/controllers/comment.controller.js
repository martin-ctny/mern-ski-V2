const Comment = require("../models/Comment.model");
const Post = require("../models/Post");

const CommentController = {
  create: async (req, res) => {
    try {
      const comment = new Comment(req.body);
      const newComment = await comment.save();
      const post = await Post.findById(req.body.post);
      post.comments.push(newComment._id);
      await post.save();
      res.send(newComment);
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  },
};

module.exports = CommentController;
