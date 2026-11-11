import React from 'react';
import { FileText, Heart, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

// Reusable Footer Component (Experiment 1)
const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white shadow-sm">
                <FileText className="w-4 h-4" />
              </div>
              <span className="text-lg font-display font-bold text-slate-900">ResumeForge</span>
            </div>
            <p className="text-sm text-slate-600 max-w-sm leading-relaxed">
              ResumeForge is an intuitive, intelligent resume builder web application designed to help students and job seekers craft job-ready, ATS-compliant resumes in minutes.
            </p>
            <div className="flex items-center gap-2 text-xs font-medium text-brand-700 bg-brand-50 px-3 py-1.5 rounded-md inline-flex border border-brand-200/50">
              <GraduationCap className="w-4 h-4" />
              <span>Full-Stack MERN Mini Project – Experiment 10</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-slate-600 hover:text-brand-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a href="/#features" className="text-slate-600 hover:text-brand-600 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="/#templates" className="text-slate-600 hover:text-brand-600 transition-colors">
                  Resume Templates
                </a>
              </li>
              <li>
                <Link to="/dashboard" className="text-slate-600 hover:text-brand-600 transition-colors">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Tech Stack Info */}
          <div>
            <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {['React.js', 'Vite', 'Express.js', 'Node.js', 'MongoDB', 'Mongoose', 'Tailwind CSS', 'JWT', 'bcryptjs'].map(
                (tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 bg-slate-100 text-slate-700 rounded font-mono"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} ResumeForge. Built with React & Node.js.</p>
          <p className="flex items-center gap-1">
            Developed for University Practical Examination & Mini Project Submission
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
