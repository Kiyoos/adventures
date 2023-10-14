const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

// Get all Fish
const getAllFish = async (req, res) => {
  try {
    const result = await mongodb.getDb().db().collection('fish').find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a Fish by ID
const getSingleFish = async (req, res) => {
  try {
    // req.params.id will grab the requested id for the json file
    const userId = new ObjectId(req.params.id);
    // .find({_id: userId}) finds the user id that was entered above
    const result = await mongodb.getDb().db().collection('fish').find({ _id: userId });
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Post/Create a new Fish
const createFish = async (req, res) => {
  try {
    const fish = {
      type: req.body.type,
      length: req.body.length,
      weight: req.body.weight,
      date: req.body.date,
      location: req.body.location
    };
    const result = await mongodb.getDb().db().collection('fish').insertOne(fish);
    if (result.acknowledged) {
      res.status(201).json(result);
    } else {
      res.status(500).json(result.error || 'Some error occurred while creating the fish.');
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Put/Update a Fish
const updateFish = async (req, res) => {
  try {
    // req.params.id will grab the requested id for the json file
    const userId = new ObjectId(req.params.id);
    const fish = {
      type: req.body.type,
      length: req.body.length,
      weight: req.body.weight,
      date: req.body.date,
      location: req.body.location
    };
    // .updateOne({_id: userId}) deletes the user id that was entered above
    const result = await mongodb.getDb().db().collection('fish').replaceOne({ _id: userId }, fish);
    console.log(result);
    if (result.modifiedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json(result.error || 'Some error occurred while updating the fish.');
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a Fish
const deleteFish = async (req, res) => {
  try {
    // req.params.id will grab the requested id for the json file
    const userId = new ObjectId(req.params.id);
    // .deleteOne({_id: userId}) deletes the user id that was entered above
    const result = await mongodb.getDb().db().collection('fish').deleteOne({ _id: userId });
    if (result.acknowledged) {
      res.status(200).json(result);
    } else {
      res.status(500).json(result.error || 'Some error occurred while deleting the fish.');
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllFish,
  getSingleFish,
  createFish,
  updateFish,
  deleteFish
};
