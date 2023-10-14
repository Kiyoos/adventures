const express = require('express');
const router = express.Router();
const fishController = require('../controllers/fish');

// get all contacts from db
router.get('/', fishController.getAllFish);

// get single contact from db
router.get('/:id', fishController.getSingleFish);

// create new contact
router.post('/', fishController.createFish);

// update new contact
router.put('/:id', fishController.updateFish);

// delete new contact
router.delete('/:id', fishController.deleteFish);

// exports
module.exports = router;
