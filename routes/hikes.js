const express = require('express');
const router = express.Router();
const hikesController = require('../controllers/hikes');
const validation = require('../middleware/validate');

// get all contacts from db
router.get('/', hikesController.getHikes);

// get single contact from db
router.get('/:id', validation.checkId, hikesController.getHike);

// create new contact
router.post('/', validation.saveHike, hikesController.createHike);

// update new contact
router.put('/:id', validation.checkId, validation.saveHike, hikesController.updateHike);

// delete new contact
router.delete('/:id', validation.checkId, hikesController.deleteHike);

// exports
module.exports = router;
