const productService = require('../services/shopService');

// get all products
async function getProducts(req, res) {
  try {
    const product = await productService.getProducts();
    res.status(200).json({
      message: "Successfully fetched all products",
      data: product
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}


// Create a new product
async function createProduct(req, res) {
  try {
    const productCreated = await productService.createProduct(req.body);
    res.status(201).json({ productCreated });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

//create multiple products
// async function createMultipleProducts(req, res) {
//   try {
//     const createdProducts = await productService.createMultipleProducts(req.body);
//     res.status(201).json({createdProducts});
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };


// Get a product by ID
async function getProductById(req, res) {
  const { productId } = req.params;
  try {
    const product = await productService.getProductById(productId);
    if (!product) {
      return res.status(404).json({ error: 'product not found' });
    }
    res.status(200).json({
      message: "Successfully fetched product",
      data: product
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

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
  getProducts,
  createProduct,
  // createMultipleProducts,
  getProductById
//   updateProductById,
//   deleteProductById,
};