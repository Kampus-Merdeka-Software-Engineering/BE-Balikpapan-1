const express = require('express');
const cartController = require('../controllers/cartController');
const cartRoutes = express.Router();

// get user cart
cartRoutes.get('/:id', cartController.getUserCart);

// add product to cart
cartRoutes.post('/', cartController.addProductToCart);

module.exports = { cartRoutes };