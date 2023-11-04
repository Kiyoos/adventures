const express = require('express');
const router = express.Router();
const oauthController = require('../controllers/oauth');

router.get('/', oauthController.oauthConnect);
router.get('/callback', oauthController.oauthCallback);

module.exports = router;
