const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require("cookie-parser");
const cors = require('cors');
const connectDB = require('./config/db');

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

dotenv.config();
const app = express(); 

// Middleware
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use(express.json());
app.use('/uploads', express.static('backend/uploads'));
app.use(cookieParser());


// DB connection
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use("/api/requests", require("./routes/swap.js"));
app.use('/api/users', userRoutes);

// Test route
app.get('/test', (req, res) => {
  res.json({ message: 'Server is running!' });
});
app.get("/", (req, res) => res.send("API is running"));


// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

