const express = require('express');
const cartController = require('../controllers/cartController');
const cartRoutes = express.Router();

// get user cart (cart of specific user by id)
cartRoutes.get('/:id', cartController.getUserCart);

// add product to cart
cartRoutes.post('/', cartController.addProductToCart);

module.exports = { cartRoutes };