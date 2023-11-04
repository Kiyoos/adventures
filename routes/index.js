const express = require('express');
const router = express.Router();
const { auth } = require('express-openid-connect');
const auth0Controller = require('../controllers/auth0');

const home = require('./home');
const auth0 = require('./auth0');
const fish = require('./fish');
const hikes = require('./hikes');
// const oauth = require('./oauth');
const profile = require('./profile');
const swagger = require('./swagger');

router.use('/', home);
router.use(auth(auth0Controller.config));
router.use('/auth0', auth0);
router.use('/fish', fish);
router.use('/hikes', hikes);
// router.use('/oauth', oauth);
// router.use('/callback', oauth);
router.use('/profile', profile);
router.use('/swagger', swagger);

module.exports = router;
