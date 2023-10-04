const { prisma } = require('../config/prisma');

//create user (for sign in)
async function newUser(user) {
  try {
    const newUser = await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password
      }
    })
    return newUser;
  } catch (error) {
    throw new Error(error)
  }
}

// get user by email (for log in)
// apakah ini by user email saja atau password juga????
async function getSpecificUser(email) {
  try {
    const userEmail = await prisma.user.findUnique({
      where: {
        email: String(email)
      }
    })
    return userEmail
  } catch (error) {
    throw new Error(error)
  }
}



module.exports = {
  newUser,
  getSpecificUser

};