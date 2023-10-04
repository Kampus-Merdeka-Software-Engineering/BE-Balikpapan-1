require('dotenv').config();
const express = require('express');
const cors = require('cors');
const request = require('request');
const { userRoutes } = require('./routes/userRoutes');
const { shopRoutes } = require('./routes/shopRoutes');
const { cartRoutes } = require('./routes/cartRoutes');
const { blogRoutes } = require('./routes/blogRoutes');
const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
const userRouter = express.Router();
app.use('/', userRouter);

const shopRouter = express.Router();
app.use('/', shopRouter);

const cartRouter = express.Router();
app.use('/', cartRouter);

const blogRouter = express.Router();
app.use('/', blogRouter)


// /user
userRouter.use('/user', userRoutes);
// /shop
shopRouter.use('/shop', shopRoutes);
// /cart
cartRouter.use('/cart', cartRoutes);
// /blog
blogRouter.use('/blog', blogRoutes);

// error handling 
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'something wrong in the server' });
});


app.listen(PORT, () => console.log(`Server ready on port: ${PORT}`));
