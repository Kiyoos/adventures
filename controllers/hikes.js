const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

// Get all Hikes
const getHikes = async (req, res) => {
  try {
    const result = await mongodb.getDb().db().collection('hikes').find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a Hike by ID
const getHike = async (req, res) => {
  try {
    // req.params.id will grab the requested id for the json file
    const userId = new ObjectId(req.params.id);
    // .find({_id: userId}) finds the user id that was entered above
    const result = await mongodb.getDb().db().collection('hikes').find({ _id: userId });
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Post/Create a new Hike
const createHike = async (req, res) => {
  try {
    const hike = {
      hikeName: req.body.hikeName,
      location: req.body.location,
      type: req.body.type,
      miles: req.body.miles,
      elevationStart: req.body.elevationStart,
      elevationEnd: req.body.elevationEnd,
      elevationGain: req.body.elevationGain
    };
    const result = await mongodb.getDb().db().collection('hikes').insertOne(hike);
    if (result.acknowledged) {
      res.status(201).json(result);
    } else {
      res.status(500).json(result.error || 'Some error occurred while creating the hike.');
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Put/Update a Hike
const updateHike = async (req, res) => {
  try {
    // req.params.id will grab the requested id for the json file
    const userId = new ObjectId(req.params.id);
    const hike = {
      hikeName: req.body.hikeName,
      location: req.body.location,
      type: req.body.type,
      miles: req.body.miles,
      elevationStart: req.body.elevationStart,
      elevationEnd: req.body.elevationEnd,
      elevationGain: req.body.elevationGain
    };
    // .updateOne({_id: userId}) deletes the user id that was entered above
    const result = await mongodb.getDb().db().collection('hikes').replaceOne({ _id: userId }, hike);
    console.log(result);
    if (result.modifiedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json(result.error || 'Some error occurred while updating the hike.');
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a Hike
const deleteHike = async (req, res) => {
  try {
    // req.params.id will grab the requested id for the json file
    const userId = new ObjectId(req.params.id);
    // .deleteOne({_id: userId}) deletes the user id that was entered above
    const result = await mongodb.getDb().db().collection('hikes').deleteOne({ _id: userId });
    if (result.acknowledged) {
      res.status(200).json(result);
    } else {
      res.status(500).json(result.error || 'Some error occurred while deleting the hike.');
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getHikes,
  getHike,
  createHike,
  updateHike,
  deleteHike
};
