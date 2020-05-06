const express = require('express');
const User = require('../models/user');
const router = new express.Router();

router.post('/users', async (req, res) => {
    const user = new User(req.body);
  
    try {
      await user.save();
      res.status(201).send(user);
    } catch (e) {
      res.status(400).send(e);
    }
  });
  
  router.get('/users', async (req, res) => {
    try {
      users = await User.find({});
      res.send(users);
    } catch (e) {
      res.status(500).send();
    }
  });
  
  router.get('/users/:id', async (req, res) => {
    try {
      const _id = req.params.id;
      user = await User.findById(_id);
      if (!user) {
        return res.status(404).send();
      }
      res.send(user);
    } catch (e) {
      res.status(500).send();
    }
  });
  
  router.patch('/users/:id', async (req, res) => {
    try {
      // new: true to get the latest updated data,
      // run validors to run validator agains the object we're retriving in case the object doesn't exist
  
      // check if the property that we're trying to update exist in the DB so that we can return a nice message
      const updates = Object.keys(req.body);
      const allowedUpdates = ['name', 'email', 'password', 'age'];
      const isValidOperation = updates.every(update => {
        return allowedUpdates.includes(update);
      });
  
      if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates' });
      }
      const user = await User.findById(req.params.id);

      updates.forEach((update) => user[update] = req.body[update]);
      await user.save();
      
      if (!user) {
        return res.status(400).send();
      }
  
      res.send(user);
    } catch (e) {
      res.status(400).send(e);
    }
  });
  
  router.delete('/users/:id', async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
  
      if (!user) {
        return res.status(404).send();
      }
  
      res.send(user);
    } catch (e) {
      res.status(500).send();
    }
  });

  module.exports = router