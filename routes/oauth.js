const express = require('express');
const router = express.Router();
const oauthController = require('../controllers/oauth');
// const validation = require('../middleware/validate');
// const axios = require('axios');

router.get('/', oauthController.oauthConnect);

module.exports = router;
