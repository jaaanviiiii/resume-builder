// Main Express Server (Experiment 5 & 6)
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
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

// Mount API Routes
app.use('/api/auth', authRoutes);
app.use('/api/resumes', resumeRoutes);
// Also support route aliases in case of serverless rewrite stripping
app.use('/auth', authRoutes);
app.use('/resumes', resumeRoutes);

// API Health Check Route
app.get('/api', (req, res) => {
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

// Serve Frontend Static Production Build (Unified Full-Stack MERN Deployment)
const distPath = path.join(__dirname, '../frontend/dist');
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));

  // Client-side SPA routing fallback: send index.html for all non-API paths
  app.get('*', (req, res, next) => {
    if (req.originalUrl.startsWith('/api')) {
      return next();
    }
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

// 404 Route Handler for undefined API endpoints
app.use('/api/*', (req, res) => {
  res.status(404).json({
    success: false,
    message: `API endpoint not found: ${req.originalUrl}`,
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
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`===============================================`);
    console.log(`ResumeForge Full-Stack Server running on port ${PORT}`);
    console.log(`App URL: http://localhost:${PORT}`);
    console.log(`API URL: http://localhost:${PORT}/api`);
    console.log(`===============================================`);
  });
}

module.exports = app;
