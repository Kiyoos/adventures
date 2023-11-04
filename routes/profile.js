const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profile');
const { requiresAuth } = require('express-openid-connect');

// get profile from oauth provider
router.get('/', requiresAuth(), profileController.getProfile);

module.exports = router;
