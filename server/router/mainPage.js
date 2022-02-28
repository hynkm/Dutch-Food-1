const express = require('express');
const router = express.Router();
const controller = require('../controller/main');


router.get('/post', controller.getPost);

module.exports = router;