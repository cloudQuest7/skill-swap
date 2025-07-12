const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const feedbackRoutes = require('./routes/feedback');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

dotenv.config();
const app = express(); 

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('backend/uploads'));

// DB connection
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/feedback', feedbackRoutes);


// Test route
app.get('/test', (req, res) => {
  res.json({ message: 'Server is running!' });
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

