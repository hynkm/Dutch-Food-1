const express = require('express');
const router = express.Router();
const controller = require('../controller/auth');

router.get('/', controller.auth);

module.exports = router;
