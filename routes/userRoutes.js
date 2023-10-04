const express = require('express');
const userController = require('../controllers/userController');
const userRoutes = express.Router();


// Create new user (sign in)
userRoutes.post('/', userController.newUser);

// Get a user by email (login)
userRoutes.get('/user', userController.getSpecificUser);

module.exports = { userRoutes };