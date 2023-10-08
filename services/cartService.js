
const { prisma } = require('../config/prisma');

//get all added products
async function getCart() {
  try {
    const addedProduct = await prisma.addedProduct.findMany(
      {
      include: {
        user: true,
        product: true
      }
    });
    return addedProduct;
  } catch (error) {
    console.log(error);
  }
}



//coba post
async function addProductToCart(data) {
  const userId = parseInt(data.userId);
  const productId = parseInt(data.productId);
  const quantity = parseInt(data.quantity)
  try {
    // new entry
    const productAdded = await prisma.addedProduct.create({
      data: {
        user: { connect: { id: userId } },
        product: { connect: { id: productId } },
        quantity: quantity
      },
    });

    return productAdded;
  } catch (error) {
    throw error;
  }
}

async function getUserCart(userCartId) {
  const user = parseInt(userCartId);
  console.log(user);
  try {
    const userCart = await prisma.addedProduct.findMany({
      where: {
        userId: {
          in: [user]
        }
      },
      include: {
        product: {
          select: {
            image: true,
            productname: true,
            price: true
          }
        }

      }
    })
    return userCart
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  getCart,
  addProductToCart,
  getUserCart
};
  