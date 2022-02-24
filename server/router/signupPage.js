const express = require('express');
const router = express.Router();
const controller = require('../controller/signup');

router.get('/', controller.emailCheck);
router.get('/', controller.nicknameCheck);
router.post('/', controller.signup);

module.exports = router;