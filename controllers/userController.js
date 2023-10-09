const userService = require('../services/userService');

// get all users 
async function getUsers(req, res) {
  try {
    const user = await userService.getUsers();
    res.status(200).json({
      message: "Successfully fetched all users",
      data: user
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}


// Create a new user
async function newUser(req, res) {
  try {
    const userCreated = await userService.newUser(req.body);
    res.status(201).json({ userCreated });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Get a user by id
async function getSpecificUser(req, res) {
  const { userId } = req.params;
  try {
    const user = await userService.getSpecificUser(userId);
    if (!user) {
      return res.status(404).json({ error: 'user not found' });
    }
    res.status(200).json({
      message: "Successfully fetched user",
      data: user
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}


module.exports = {
  getUsers,
  newUser,
  getSpecificUser
};