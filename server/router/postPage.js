const express = require('express');
const router = express.Router();
const controller = require('../controller/post');

router.post('/post', controller.createPost);
router.patch('/post', controller.updatePost);
router.post('/comment', controller.createComment);
router.patch('/comment', controller.updateComment);
router.get('/comment', controller.postComment);
router.delete('/post', controller.deletePost);
router.delete('comment', controller.deleteComment);

module.exports = router;
