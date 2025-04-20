const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db'); // Gọi file connectDB đúng

const app = express();
const PORT = process.env.PORT || 5000;

// Gọi connectDB sớm trước khi khởi động app
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('Backend server is running 🎉');
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
