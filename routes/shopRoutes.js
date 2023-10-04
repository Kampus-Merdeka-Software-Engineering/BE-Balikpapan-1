const express = require('express');
const shopController = require('../controllers/shopController');
const shopRoutes = express.Router();

// get all products
shopRoutes.get('/', shopController.getProducts);

// Create a new product
shopRoutes.post('/', shopController.createProduct);

// create multiple products
// shopRoutes.post('/', shopController.createMultipleProducts);

// Get a product by ID
shopRoutes.get('/:productId', shopController.getProductById);

module.exports = { shopRoutes };