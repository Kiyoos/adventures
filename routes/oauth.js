const express = require('express');
const router = express.Router();
const oauthController = require('../controllers/oauth');
// const validation = require('../middleware/validate');

router.get('/', oauthController.oauthConnect);
router.get('/oauth-callback', oauthController.oauthCallback);

module.exports = router;
