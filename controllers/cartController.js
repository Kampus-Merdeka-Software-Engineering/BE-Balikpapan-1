const cartService = require('../services/cartService');

// get cart by user id
async function getUserCart(req, res) {
  const userId = req.params.id; 
  console.log(userId)
  try {
    const addedProduct = await cartService.getUserCart(userId);
    res.status(200).json({
      message: "Successfully fetched user's cart",
      data: addedProduct
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// add product to cart
async function addProductToCart(req, res) {
  try {
    const addedProduct = await cartService.addProductToCart(req.body);
    res.status(201).json({ addedProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  getUserCart,
  addProductToCart

};