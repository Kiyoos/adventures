const express = require('express');
const router = express.Router();
const swagger = require('./swagger');
const fish = require('./fish');
const hikes = require('./hikes');

router.use('/', swagger);
router.use('/fish', fish);
router.use('/hikes', hikes);

module.exports = router;
