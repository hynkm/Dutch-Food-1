const express = require('express');
const router = express.Router();
const controller = require('../controller/mypage');

router.get('/', controller.myInfo);
router.patch('/users', controller.updateNickname);
router.patch('users', controller.updatePassword);
router.delete('/users', controller.unregister);