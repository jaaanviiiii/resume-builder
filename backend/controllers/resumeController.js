const mongoose = require('mongoose');
const Resume = require('../models/Resume');
const { readData, writeData } = require('../config/localStore');

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

    const isDbConnected = mongoose.connection.readyState === 1;

    let newResume;
    if (isDbConnected) {
      newResume = await Resume.create({
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
    } else {
      const store = readData();
      newResume = {
        _id: 'resume_' + Date.now(),
        userId: req.user.userId,
        resumeTitle: resumeTitle || 'My Professional Resume',
        personalInfo: personalInfo || {},
        education: education || [],
        skills: skills || [],
        projects: projects || [],
        experience: experience || [],
        certifications: certifications || [],
        selectedTemplate: selectedTemplate || 'modern',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      store.resumes.push(newResume);
      writeData(store);
    }

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
    const isDbConnected = mongoose.connection.readyState === 1;

    let resumes = [];
    if (isDbConnected) {
      // Uses find() and populate() (Experiment 8)
      resumes = await Resume.find({ userId: req.user.userId })
        .populate('userId', 'name email')
        .sort({ updatedAt: -1 });
    } else {
      const store = readData();
      resumes = store.resumes
        .filter((r) => r.userId.toString() === req.user.userId.toString())
        .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    }

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
    const isDbConnected = mongoose.connection.readyState === 1;

    let resume = null;
    if (isDbConnected) {
      resume = await Resume.findById(req.params.id).populate('userId', 'name email');
    } else {
      const store = readData();
      resume = store.resumes.find((r) => r._id.toString() === req.params.id.toString());
    }

    if (!resume) {
      return res.status(404).json({
        success: false,
        message: 'Resume not found.',
      });
    }

    // Security check: ensure user owns this resume
    const ownerId = resume.userId?._id?.toString() || resume.userId?.toString();
    if (ownerId !== req.user.userId.toString()) {
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
    const isDbConnected = mongoose.connection.readyState === 1;

    let updatedResume = null;
    if (isDbConnected) {
      const resume = await Resume.findById(req.params.id);
      if (!resume) {
        return res.status(404).json({ success: false, message: 'Resume not found.' });
      }
      if (resume.userId.toString() !== req.user.userId.toString()) {
        return res.status(403).json({ success: false, message: 'Unauthorized' });
      }
      updatedResume = await Resume.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true, runValidators: true }
      );
    } else {
      const store = readData();
      const index = store.resumes.findIndex((r) => r._id.toString() === req.params.id.toString());
      if (index === -1) {
        return res.status(404).json({ success: false, message: 'Resume not found.' });
      }
      if (store.resumes[index].userId.toString() !== req.user.userId.toString()) {
        return res.status(403).json({ success: false, message: 'Unauthorized' });
      }
      store.resumes[index] = {
        ...store.resumes[index],
        ...req.body,
        updatedAt: new Date().toISOString(),
      };
      writeData(store);
      updatedResume = store.resumes[index];
    }

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
    const isDbConnected = mongoose.connection.readyState === 1;

    if (isDbConnected) {
      const resume = await Resume.findById(req.params.id);
      if (!resume) {
        return res.status(404).json({ success: false, message: 'Resume not found.' });
      }
      if (resume.userId.toString() !== req.user.userId.toString()) {
        return res.status(403).json({ success: false, message: 'Unauthorized' });
      }
      await Resume.findByIdAndDelete(req.params.id);
    } else {
      const store = readData();
      const index = store.resumes.findIndex((r) => r._id.toString() === req.params.id.toString());
      if (index === -1) {
        return res.status(404).json({ success: false, message: 'Resume not found.' });
      }
      if (store.resumes[index].userId.toString() !== req.user.userId.toString()) {
        return res.status(403).json({ success: false, message: 'Unauthorized' });
      }
      store.resumes.splice(index, 1);
      writeData(store);
    }

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
