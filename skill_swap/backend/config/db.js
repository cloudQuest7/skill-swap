const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {

    // Add options for MongoDB Atlas connection
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
      socketTimeoutMS: 45000,        // Close socket after 45 seconds of inactivity
      family: 4,                     // Use IPv4
    };

    await mongoose.connect(process.env.MONGO_URI, options);
    console.log("MongoDB connected to Atlas");
  } catch (err) {
    console.error("DB connection error:", err);
    process.exit(1);
  }
};
module.exports = connectDB;
