// MongoDB Database Connection using Mongoose (Experiment 8)
const mongoose = require('mongoose');

const connectDB = async () => {
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/resumeforge';
  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000, // Timeout fast after 5s if not reachable
    });
    console.log(`MongoDB Connected successfully: ${conn.connection.host}`);
  } catch (error) {
    console.warn(`[MongoDB Warning] Could not connect to database at ${uri}`);
    console.warn(`Reason: ${error.message}`);
    console.warn(`Note: Ensure MongoDB is running locally or set MONGODB_URI to your MongoDB Atlas connection string in .env`);
    if (process.env.NODE_ENV === 'production') {
      process.exit(1);
    }
  }
};

module.exports = connectDB;
