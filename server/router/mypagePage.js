const express = require('express');
const router = express.Router();
const controller = require('../controller/mypage');

router.patch('/nickname', controller.updateNickname);
router.patch('/password', controller.updatePassword);
router.delete('/users', controller.unregister);
router.get('/post', controller.getUserPost);
router.get('/comment', controller.getUserComment);
router.get('/allcomment', controller.getAllComment);
router.post('/commentedpost', controller.getCommentedPost);

module.exports = router;
