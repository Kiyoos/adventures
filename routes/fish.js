const express = require('express');
const router = express.Router();
const fishController = require('../controllers/fish');
const validation = require('../middleware/validate');

// get all contacts from db
router.get('/', fishController.getAllFish);

// get single contact from db
router.get('/:id', validation.checkId, fishController.getSingleFish);

// create new contact
router.post('/', validation.saveFish, fishController.createFish);

// update new contact
router.put('/:id', validation.checkId, validation.saveFish, fishController.updateFish);

// delete new contact
router.delete('/:id', validation.checkId, fishController.deleteFish);

// exports
module.exports = router;
