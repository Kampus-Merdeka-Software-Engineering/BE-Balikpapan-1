const express = require('express');
const shopController = require('../controllers/shopController');
const homeRoutes = express.Router();

// get all featured products
homeRoutes.get('/featured', shopController.getFeaturedProducts);

// get all new arrival products
homeRoutes.get('/new-arrival', shopController.getNewArrival);

module.exports = { homeRoutes };