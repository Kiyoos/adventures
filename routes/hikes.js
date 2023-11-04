const express = require('express');
const router = express.Router();
const hikesController = require('../controllers/hikes');
const validation = require('../middleware/validate');
const { requiresAuth } = require('express-openid-connect');

// get all hikes from db
router.get('/', requiresAuth(), hikesController.getHikes);

// get single hike from db
router.get('/:id', requiresAuth(), validation.checkId, hikesController.getHike);

// create new hike
router.post('/', requiresAuth(), validation.saveHike, hikesController.createHike);

// update new hike
router.put(
  '/:id',
  requiresAuth(),
  validation.checkId,
  validation.saveHike,
  hikesController.updateHike
);

// delete new hike
router.delete('/:id', requiresAuth(), validation.checkId, hikesController.deleteHike);

// exports
module.exports = router;
