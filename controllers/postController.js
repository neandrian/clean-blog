const Post = require('../models/Post');

exports.addPost = async (req, res) => {
  await Post.create(req.body);
  res.redirect('/');
};

exports.updatePost = async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  post.title = req.body.title;
  post.detail = req.body.detail;
  post.save();

  res.redirect(`/posts/${req.params.id}`);
};

exports.deletePost = async (req, res) => {
  await Post.findByIdAndRemove({ _id: req.params.id });
  res.redirect('/');
};
