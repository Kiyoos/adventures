const express = require('express');
const router = express.Router();
const swagger = require('./swagger');
const fish = require('./fish');
const hikes = require('./hikes');
const oauth = require('./oauth');

router.use('/', swagger);
router.use('/fish', fish);
router.use('/hikes', hikes);
router.use('/oauth', oauth);
router.use('/oauth-callback', oauth);

module.exports = router;
