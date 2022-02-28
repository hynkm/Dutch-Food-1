const express = require('express');
const router = express.Router();
const controller = require('../controller/signup');

router.post('/emailCheck', controller.emailCheck);
router.post('/nicknameCheck', controller.nicknameCheck);
router.post('/singup', controller.signup);

module.exports = router;
