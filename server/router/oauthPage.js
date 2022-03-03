const express = require('express');
const router = express.Router();
const controller = require('./../controller/oauth');

router.post('/google', controller.google);
router.post('/googlecallback', controller.googlecallback);
router.post('/kakao', controller.kakao);
router.post('/kakaocallback', controller.kakaocallback);

module.exports = router;
