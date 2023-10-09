const express = require('express');
const shopController = require('../controllers/shopController');
const shopRoutes = express.Router();

// get all products
shopRoutes.get('/', shopController.getProducts);

// Create a new product (via admin only)
shopRoutes.post('/', shopController.createProduct);

// Get a product by ID (via admin only, for testing)
shopRoutes.get('/:productId', shopController.getProductById);

module.exports = { shopRoutes };