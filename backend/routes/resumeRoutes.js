const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const {
  createResume,
  getAllResumes,
  getResumeById,
  updateResume,
  deleteResume,
} = require('../controllers/resumeController');

// All resume routes are protected by authMiddleware
router.use(authMiddleware);

// POST /api/resumes - Create new resume
// GET  /api/resumes - Get all resumes of logged-in user
router.route('/')
  .post(createResume)
  .get(getAllResumes);

// GET    /api/resumes/:id - Get single resume
// PUT    /api/resumes/:id - Update resume
// DELETE /api/resumes/:id - Delete resume
router.route('/:id')
  .get(getResumeById)
  .put(updateResume)
  .delete(deleteResume);

module.exports = router;

