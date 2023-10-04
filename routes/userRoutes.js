const express = require('express');
const userController = require('../controllers/userController');
const userRoutes = express.Router();

// get all users
userRoutes.get('/', userController.getUsers);
// Create new user (sign in)
userRoutes.post('/', userController.newUser);

// Get a user by email (login)
// userRoutes.get('/:user', userController.getSpecificUser);

module.exports = { userRoutes };