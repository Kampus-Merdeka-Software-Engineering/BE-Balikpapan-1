const express = require('express');
const userController = require('../controllers/userController');
const userRoutes = express.Router();

// get all users
userRoutes.get('/', userController.getUsers);
// Create new user (sign in)
userRoutes.post('/', userController.newUser);

// Get a user by id (login)
userRoutes.get('/:userId', userController.getSpecificUser);

module.exports = { userRoutes };