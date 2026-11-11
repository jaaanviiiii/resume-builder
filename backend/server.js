// Main Express Server (Experiment 5 & 6)
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const logger = require('./middleware/logger');

// Import route modules
const authRoutes = require('./routes/authRoutes');
const resumeRoutes = require('./routes/resumeRoutes');

const app = express();

// Connect to MongoDB Atlas / Local Database
connectDB();

// Core Middleware
app.use(cors());
app.use(express.json());

// Custom Logger Middleware
app.use(logger);

// Base / Health Check Route
app.get('/', (req, res) => {
  res.json({
    status: 'online',
    message: 'Welcome to ResumeForge API - University Mini Project',
    version: '1.0.0',
    endpoints: {
      auth: ['POST /api/auth/register', 'POST /api/auth/login'],
      resumes: [
        'GET /api/resumes',
        'POST /api/resumes',
        'GET /api/resumes/:id',
        'PUT /api/resumes/:id',
        'DELETE /api/resumes/:id',
      ],
    },
  });
});

// Mount Routes
app.use('/api/auth', authRoutes);
app.use('/api/resumes', resumeRoutes);

// 404 Route Handler for undefined endpoints
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: `Resource not found at ${req.originalUrl}`,
  });
});

// Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error('Unhandled Application Error:', err.stack);
  res.status(500).json({
    success: false,
    message: 'Internal server error occurred.',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined,
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`===============================================`);
  console.log(`ResumeForge Server running on port ${PORT}`);
  console.log(`API URL: http://localhost:${PORT}`);
  console.log(`===============================================`);
});
