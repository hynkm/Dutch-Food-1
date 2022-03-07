const express = require('express');
const controller = require('../controller/logout');
const router = express.Router();

router.post('/logout', controller.logout);

module.exports = router;