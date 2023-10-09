const { prisma } = require('../config/prisma');

//create user (testing)
async function newUser(user) {
  try {
    const userCreated = await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password
      }
    })
    return userCreated;
  } catch (error) {
    throw new Error(error)
  }
}

//get all users (via admin only)
async function getUsers() {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    console.log(error);
  }
}

// get user by id (via admin only)
async function getSpecificUser(userId) {
  try {
    const userEmail = await prisma.user.findUnique({
      where: {
        id: Number(userId)
      }
    })
    return userEmail
  } catch (error) {
    throw new Error(error)
  }
}



module.exports = {
  getUsers,
  newUser,
  getSpecificUser

};