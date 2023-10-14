const express = require('express');
const router = express.Router();
const hikesController = require('../controllers/hikes');

// get all contacts from db
router.get('/', hikesController.getHikes);

// get single contact from db
router.get('/:id', hikesController.getHike);

// create new contact
router.post('/', hikesController.createHike);

// update new contact
router.put('/:id', hikesController.updateHike);

// delete new contact
router.delete('/:id', hikesController.deleteHike);

// exports
module.exports = router;
