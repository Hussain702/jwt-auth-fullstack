// server.js
require('dotenv').config();
const express = require('express');
const connectDB = require('./config'); // your config.js for DB

const cors = require('cors');
const authRouter = require('./Routes/authRouter');
const productRouter = require('./Routes/productRouter');

const app = express();

// Environment port
const PORT = process.env.PORT || 8080;

// Connect to database
connectDB();

// Middleware
app.use(express.json()); 
app.use(cors());


app.get('/', (req, res) => {
  res.send('Server is running');
});

// Auth routes
app.use('/auth', authRouter);
app.use('/products', productRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


