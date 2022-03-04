const { createPost, updatePost } = require('.functions/post');
const { createComment, updateComment } = require('.functions/comment');
const { Comment } = require('../models');

module.exports = {
  createPost: async (req, res) => {
    const resObject = await createPost(req);
    res.status(resObject.code).send(resObject.message);
  },
  updatePost: async (req, res) => {
    const resObject = await updatePost(req.body);
    res.status(resObject.code).send(resObject.message);
  },
  createComment: async (req, res) => {
    const resObject = await createComment(req);
    res.status(resObject.code).send(resObject.message);
  },
  updateComment: async (req, res) => {
    const resObject = await updateComment(req.body);
    res.status(resObject.code).send(resObject.message);
  },
  postComment: async (req, res) => {
    try {
      const commentList = await Comment.findAll({
        where: { post_id: req.body.post_id },
      });
      res.status(200).json({ commentList });
    } catch (err) {
      res.status(400).json({ message: '잘못된 요청입니다' });
    }
  },
  deletePost: async (req, res) => {
    const resObject = await deletePost(req);
    res.status(resObject.code).send(resObject.message);
  },
  deleteComment: async (req, res) => {
    const resObject = await deleteComment(req);
    res.status(resObject.code).send(resObject.message);
  },
};
