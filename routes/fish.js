const express = require('express');
const router = express.Router();
const fishController = require('../controllers/fish');
const validation = require('../middleware/validate');
const { requiresAuth } = require('express-openid-connect');

// get all fishs from db
router.get('/', requiresAuth(), fishController.getAllFish);

// get single fish from db
router.get('/:id', requiresAuth(), validation.checkId, fishController.getSingleFish);

// create new fish
router.post('/', requiresAuth(), validation.saveFish, fishController.createFish);

// update new fish
router.put(
  '/:id',
  requiresAuth(),
  validation.checkId,
  validation.saveFish,
  fishController.updateFish
);

// delete new fish
router.delete('/:id', requiresAuth(), validation.checkId, fishController.deleteFish);

// exports
module.exports = router;
