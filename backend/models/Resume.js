const mongoose = require('mongoose');

// Resume Schema for Storing User Resumes
const resumeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    resumeTitle: {
      type: String,
      required: [true, 'Please provide a title for your resume'],
      default: 'My Professional Resume',
      trim: true,
    },
    personalInfo: {
      fullName: { type: String, default: '' },
      email: { type: String, default: '' },
      phone: { type: String, default: '' },
      location: { type: String, default: '' },
      summary: { type: String, default: '' },
      linkedin: { type: String, default: '' },
      github: { type: String, default: '' },
    },
    education: [
      {
        college: { type: String, default: '' },
        degree: { type: String, default: '' },
        course: { type: String, default: '' },
        startYear: { type: String, default: '' },
        endYear: { type: String, default: '' },
        grade: { type: String, default: '' },
      },
    ],
    skills: [
      {
        type: String,
        trim: true,
      },
    ],
    projects: [
      {
        title: { type: String, default: '' },
        description: { type: String, default: '' },
        technologies: { type: String, default: '' },
        link: { type: String, default: '' },
      },
    ],
    experience: [
      {
        company: { type: String, default: '' },
        role: { type: String, default: '' },
        duration: { type: String, default: '' },
        description: { type: String, default: '' },
      },
    ],
    certifications: [
      {
        name: { type: String, default: '' },
        organization: { type: String, default: '' },
        year: { type: String, default: '' },
      },
    ],
    selectedTemplate: {
      type: String,
      enum: ['professional', 'modern', 'minimal'],
      default: 'modern',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Resume', resumeSchema);
