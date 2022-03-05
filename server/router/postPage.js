const express = require('express');
const router = express.Router();
const controller = require('../controller/post');

router.post('/post', controller.createPost);
router.patch('/post', controller.updatePost);
router.post('/comment', controller.createComment);
router.patch('/comment', controller.updateComment);
router.post('/comments', controller.postComment);
router.delete('/post', controller.deletePost);
router.delete('/comment', controller.deleteComment);
router.post('/nickname', controller.findNickname);
router.get('/user', controller.getAllUserInfo);

module.exports = router;
