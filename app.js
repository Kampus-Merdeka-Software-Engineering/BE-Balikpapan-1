require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { userRoutes } = require('./routes/userRoutes');
const { shopRoutes } = require('./routes/shopRoutes');
const { cartRoutes } = require('./routes/cartRoutes');
const { blogRoutes } = require('./routes/blogRoutes');
const { homeRoutes } = require('./routes/homeRoutes');
const { authRoutes } = require('./routes/authRoutes');
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

const homeRouter = express.Router();
app.use('/', homeRouter)

const authRouter = express.Router();
app.use('/', authRouter)

// /user
userRouter.use('/user', userRoutes);
// /shop
shopRouter.use('/shop', shopRoutes);
// /cart
cartRouter.use('/cart', cartRoutes);
// /blog
blogRouter.use('/blog', blogRoutes);
// /homepage
homeRouter.use('/home', homeRoutes);
// auth
authRouter.use('/auth', authRoutes);

// error handling 
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'something wrong in the server' });
});


app.listen(PORT, () => console.log(`Server ready on port: ${PORT}`));
