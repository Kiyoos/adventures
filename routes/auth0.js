const express = require('express');
const router = express.Router();
const auth0Controller = require('../controllers/auth0');
const { auth, requiresAuth } = require('express-openid-connect');
// const { auth } = require('express-openid-connect');

// auth router attaches /login, /logout, and /callback routes to the baseURL
router.use(auth(auth0Controller.config));

router.get('/', requiresAuth(), auth0Controller.getLogInOut);

module.exports = router;
