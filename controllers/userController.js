const userService = require('../services/userService');

// get all users (for admin??)
// async function get(req, res) {
//   try {
//     const product = await productService.getProducts();
//     res.status(200).json({
//       message: "Successfully fetched all products",
//       data: product
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// }


// Create a new user
async function newUser(req, res) {
  try {
    const newUser = await userService.newUser(req.body);
    res.status(201).json({ newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Get a user by email
async function getSpecificUser(req, res) {
  const { email } = req.query;
  if (!email) {
    return res.status(400).json({ error: 'Email query parameter is needed' });
  };

  try {
    const user = await getSpecificUser(email);

    if (!user) {
      res.status(404).json({ error: 'User not found.' });
    }
    res.status(200).json(user);
    
  } catch (error) {
    res.status(500).json({ error: 'Failed to return user.' });
  }
};


  

// Update a product by ID
// async function updateProductById(req, res) {
//   const { productId } = req.params;
//   try {
//     const product = await productService.getProductById(productId);
//     if (!product) {
//       return res.status(404).json({ error: 'product not found' });
//     }

//     if (req.body.productname && req.body.productname !== product.productname) { 
//       product.productname = req.body.productname;
//     }
    
//     if (req.body.price && req.body.price !== product.price) {
//       product.price = req.body.price;
//     }

//     //SIZE/keterangan??--> brand, image, ...

//     await productService.updateProductById(productId, product);
//     res.status(200).json({
//       message: "Successfully update product",
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// }

// // Delete a product by ID
// async function deleteProductById(req, res) {
//   const { productId } = req.params;
//   try {
//     const product = await productService.getProductById(productId);
//     if (!product) {
//       return res.status(404).json({ error: 'product not found' });
//     }
//     const deleted = await productService.deleteProductById(productId);
//     res.status(200).json({
//       message: "Successfully delete product",
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// }

module.exports = {
  newUser,
  getSpecificUser

};