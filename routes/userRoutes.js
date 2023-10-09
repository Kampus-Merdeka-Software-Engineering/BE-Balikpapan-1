const express = require('express');
const userController = require('../controllers/userController');
const userRoutes = express.Router();

//FOR API TESTING ONLY

// get all users (via admin only)
userRoutes.get('/', userController.getUsers);

// Create new user 
userRoutes.post('/', userController.newUser);

// Get a user by id 
userRoutes.get('/:userId', userController.getSpecificUser);

module.exports = { userRoutes };