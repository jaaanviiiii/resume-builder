const Resume = require('../models/Resume');

// @desc    Create a new resume
// @route   POST /api/resumes
// @access  Private
const createResume = async (req, res) => {
  try {
    const {
      resumeTitle,
      personalInfo,
      education,
      skills,
      projects,
      experience,
      certifications,
      selectedTemplate,
    } = req.body;

    const newResume = await Resume.create({
      userId: req.user.userId,
      resumeTitle: resumeTitle || 'My Professional Resume',
      personalInfo: personalInfo || {},
      education: education || [],
      skills: skills || [],
      projects: projects || [],
      experience: experience || [],
      certifications: certifications || [],
      selectedTemplate: selectedTemplate || 'modern',
    });

    res.status(201).json({
      success: true,
      message: 'Resume created successfully!',
      data: newResume,
    });
  } catch (error) {
    console.error('Create resume error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to create resume: ' + error.message,
    });
  }
};

// @desc    Get all resumes for the logged-in user
// @route   GET /api/resumes
// @access  Private
const getAllResumes = async (req, res) => {
  try {
    // Uses find() and populate() to retrieve resumes and populate user details (Experiment 8)
    const resumes = await Resume.find({ userId: req.user.userId })
      .populate('userId', 'name email')
      .sort({ updatedAt: -1 });

    res.status(200).json({
      success: true,
      count: resumes.length,
      data: resumes,
    });
  } catch (error) {
    console.error('Get resumes error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch resumes: ' + error.message,
    });
  }
};

// @desc    Get a single resume by ID
// @route   GET /api/resumes/:id
// @access  Private
const getResumeById = async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id).populate('userId', 'name email');

    if (!resume) {
      return res.status(404).json({
        success: false,
        message: 'Resume not found.',
      });
    }

    // Security check: ensure user owns this resume
    if (resume.userId._id.toString() !== req.user.userId && resume.userId.toString() !== req.user.userId) {
      return res.status(403).json({
        success: false,
        message: 'Unauthorized access: You do not own this resume.',
      });
    }

    res.status(200).json({
      success: true,
      data: resume,
    });
  } catch (error) {
    console.error('Get single resume error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch resume: ' + error.message,
    });
  }
};

// @desc    Update a resume
// @route   PUT /api/resumes/:id
// @access  Private
const updateResume = async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);

    if (!resume) {
      return res.status(404).json({
        success: false,
        message: 'Resume not found.',
      });
    }

    // Security check: ensure user owns this resume
    if (resume.userId.toString() !== req.user.userId) {
      return res.status(403).json({
        success: false,
        message: 'Unauthorized: You cannot update another user\'s resume.',
      });
    }

    // Update using findByIdAndUpdate (Experiment 8 & 9)
    const updatedResume = await Resume.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    res.status(200).json({
      success: true,
      message: 'Resume updated successfully!',
      data: updatedResume,
    });
  } catch (error) {
    console.error('Update resume error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to update resume: ' + error.message,
    });
  }
};

// @desc    Delete a resume
// @route   DELETE /api/resumes/:id
// @access  Private
const deleteResume = async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);

    if (!resume) {
      return res.status(404).json({
        success: false,
        message: 'Resume not found.',
      });
    }

    // Security check: ensure user owns this resume
    if (resume.userId.toString() !== req.user.userId) {
      return res.status(403).json({
        success: false,
        message: 'Unauthorized: You cannot delete another user\'s resume.',
      });
    }

    // Delete using findByIdAndDelete (Experiment 8)
    await Resume.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: 'Resume deleted successfully!',
    });
  } catch (error) {
    console.error('Delete resume error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to delete resume: ' + error.message,
    });
  }
};

module.exports = {
  createResume,
  getAllResumes,
  getResumeById,
  updateResume,
  deleteResume,
};
