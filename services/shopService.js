const { prisma } = require('../config/prisma');

//get all products
async function getProducts() {
  try {
    const product = await prisma.product.findMany();
    return product;
  } catch (error) {
    console.log(error);
  }
}

// fungsi mendapat fetured product
async function getFeaturedProducts() {
  try {
    const products = await prisma.product.findMany({
      where: {
        isFeatured: true
      },
      skip: 10,
      take: 8
    })
    return products;
  } catch(error) {

  }
} 

// fungsi mendapat fetured product
async function getNewArrival() {
  try {
    const products = await prisma.product.findMany({
      where: {
        newArrival: true
      },
      take: 8
    })
    return products;
  } catch(error) {

  }
} 

//create product (non accessable for user || admin only)
async function createProduct(product) {
  try {
    const createdProduct = await prisma.product.create({
      data: {
        productname: product.productname,
        brandname: product.brandname,
        price: product.price,
        image: product.image
      }
    })
    return createdProduct;
  } catch (error) {
    throw new Error(error)
  }
}

//create multiple products
// async function createMultipleProducts(products) {
//   const createdProducts = [];
//   try {
//     for (const productData of products) {
//       const createdProduct = await prisma.product.create({
//         data: productData,
//       });

//       createdProducts.push(createdProduct);
//     }

//     return createdProducts;
//   } catch (error) {
//     throw error;
//   }
// }
  


// get a product by ID
async function getProductById(productId) {
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: Number(productId)
      }
    })
    return product
  } catch (error) {
    throw new Error(error)
  }
}



module.exports = {
  getProducts,
  createProduct,
  getFeaturedProducts,
  getNewArrival,
  getProductById
};
