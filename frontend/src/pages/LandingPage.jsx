import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ModernTemplate from '../templates/ModernTemplate';
import ProfessionalTemplate from '../templates/ProfessionalTemplate';
import MinimalTemplate from '../templates/MinimalTemplate';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Download,
  Layers,
  ShieldCheck,
  Eye,
  FileCheck,
  PenTool,
  Cpu,
  GraduationCap
} from 'lucide-react';

// Sample mock data for interactive template previews on the landing page
const sampleResumeData = {
  resumeTitle: 'Sample Software Developer Resume',
  personalInfo: {
    fullName: 'Rohan Sharma',
    email: 'rohan.sharma@example.com',
    phone: '+91 98765 43210',
    location: 'Bangalore, India',
    summary:
      'Motivated Computer Science undergraduate with hands-on experience in Full-Stack MERN development, building responsive web applications, and writing clean, maintainable code.',
    linkedin: 'linkedin.com/in/rohansharma',
    github: 'github.com/rohansharma',
  },
  education: [
    {
      college: 'National Institute of Technology',
      degree: 'B.Tech',
      course: 'Computer Science and Engineering',
      startYear: '2022',
      endYear: '2026',
      grade: '8.9 CGPA',
    },
  ],
  skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'Tailwind CSS', 'Git & GitHub'],
  projects: [
    {
      title: 'ResumeForge – Smart Resume Builder',
      technologies: 'React, Express, Node.js, MongoDB',
      description: 'Engineered a modern SaaS-style resume builder with live A4 preview, dynamic multi-section editing, and instant PDF download.',
      link: 'resumeforge.vercel.app',
    },
    {
      title: 'Campus Event Portal',
      technologies: 'MERN Stack, REST APIs',
      description: 'Designed a student event registration portal supporting user authentication and real-time announcements.',
      link: 'github.com/rohan/events',
    },
  ],
  experience: [
    {
      company: 'TechNovus Solutions',
      role: 'Frontend Development Intern',
      duration: 'May 2025 - Jul 2025',
      description: 'Collaborated with senior engineers to implement user-friendly UI components and integrate backend APIs.',
    },
  ],
  certifications: [
    {
      name: 'Full Stack Web Development Specialization',
      organization: 'Coursera / DeepLearning.AI',
      year: '2025',
    },
  ],
};

const LandingPage = () => {
  const { isAuthenticated } = useAuth();
  const [activePreviewTemplate, setActivePreviewTemplate] = useState('modern');

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-brand-50/60 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100/80 border border-brand-200 text-brand-800 text-xs font-semibold mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            <span>MERN Stack University Mini Project – Experiment 10</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight">
            Build Your Professional Resume{' '}
            <span className="bg-gradient-to-r from-brand-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              in Minutes
            </span>
          </h1>

          {/* Short Description */}
          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Create job-winning, ATS-compliant resumes with real-time preview, professional design templates, and one-click PDF export. Completely free and built for students.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to={isAuthenticated ? '/dashboard' : '/register'}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-xl shadow-lg shadow-brand-500/25 hover:shadow-brand-500/35 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>{isAuthenticated ? 'Go to Dashboard' : 'Get Started for Free'}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="#templates"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl shadow-sm transition-all"
            >
              <span>Explore Templates</span>
            </a>
          </div>

          {/* Highlights */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-500">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              100% Free & Open Source
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              ATS-Friendly Formats
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Instant PDF Export
            </span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-slate-50/50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-brand-600 uppercase tracking-widest mb-2">
              Powerful Features
            </h2>
            <h3 className="text-3xl font-display font-bold text-slate-900 tracking-tight">
              Everything You Need to Land Your Dream Job
            </h3>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Engineered with clean React state management and Express RESTful services for a seamless editing experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-soft hover:border-brand-300 hover:shadow-md transition-all duration-200">
              <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-4">
                <Eye className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Live A4 Preview</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                See your resume transform in real-time as you type. What you see is exactly what will print out in your PDF.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-soft hover:border-brand-300 hover:shadow-md transition-all duration-200">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
                <Layers className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">3 Tailored Templates</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Switch effortlessly between Modern, Professional, and ATS-Minimal designs without having to re-enter your data.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-soft hover:border-brand-300 hover:shadow-md transition-all duration-200">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                <Download className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">One-Click PDF Export</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Generate crisp, high-resolution vector PDFs formatted to standard A4 printing specifications instantly.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-soft hover:border-brand-300 hover:shadow-md transition-all duration-200">
              <div className="w-12 h-12 rounded-xl bg-violet-50 text-brand-600 flex items-center justify-center mb-4">
                <PenTool className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Dynamic Multi-Section Form</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Add, edit, or remove education, projects, skills, and certifications effortlessly with intuitive dynamic controls.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-soft hover:border-brand-300 hover:shadow-md transition-all duration-200">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Secure Cloud Storage</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Your resumes are securely stored in MongoDB with encrypted credentials (bcrypt) and protected JWT session tokens.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-soft hover:border-brand-300 hover:shadow-md transition-all duration-200">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                <FileCheck className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">ATS Compatible</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Standard section headings and clean typography ensure your application parses accurately through recruiter hiring portals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Template Previews Section */}
      <section id="templates" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-xs font-bold text-brand-600 uppercase tracking-widest mb-2">
              Template Gallery
            </h2>
            <h3 className="text-3xl font-display font-bold text-slate-900 tracking-tight">
              Crafted for Every Career Stage
            </h3>
            <p className="mt-3 text-slate-600 text-sm">
              Click below to interactively test each template with live sample student data.
            </p>
          </div>

          {/* Template Selection Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1.5 bg-slate-100 rounded-xl border border-slate-200">
              <button
                onClick={() => setActivePreviewTemplate('modern')}
                className={`px-5 py-2 text-sm font-semibold rounded-lg transition-all ${
                  activePreviewTemplate === 'modern'
                    ? 'bg-white text-brand-700 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Modern Layout
              </button>
              <button
                onClick={() => setActivePreviewTemplate('professional')}
                className={`px-5 py-2 text-sm font-semibold rounded-lg transition-all ${
                  activePreviewTemplate === 'professional'
                    ? 'bg-white text-brand-700 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Professional Layout
              </button>
              <button
                onClick={() => setActivePreviewTemplate('minimal')}
                className={`px-5 py-2 text-sm font-semibold rounded-lg transition-all ${
                  activePreviewTemplate === 'minimal'
                    ? 'bg-white text-brand-700 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Minimal ATS Layout
              </button>
            </div>
          </div>

          {/* Interactive Preview Container */}
          <div className="max-w-4xl mx-auto bg-slate-50 p-4 sm:p-8 rounded-2xl border border-slate-200 shadow-inner">
            <div className="bg-white rounded-xl shadow-paper border border-slate-200 overflow-hidden">
              {activePreviewTemplate === 'modern' && <ModernTemplate data={sampleResumeData} />}
              {activePreviewTemplate === 'professional' && <ProfessionalTemplate data={sampleResumeData} />}
              {activePreviewTemplate === 'minimal' && <MinimalTemplate data={sampleResumeData} />}
            </div>

            <div className="mt-6 text-center">
              <Link
                to={isAuthenticated ? '/editor' : '/register'}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-xl shadow-md transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>Use This Template Now</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-slate-50/70 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-brand-600 uppercase tracking-widest mb-2">
              Simple 3-Step Process
            </h2>
            <h3 className="text-3xl font-display font-bold text-slate-900 tracking-tight">
              How ResumeForge Works
            </h3>
            <p className="mt-3 text-slate-600 text-sm">
              From an empty page to an interview-ready resume in under 5 minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-soft text-center relative">
              <div className="w-12 h-12 rounded-full bg-brand-100 text-brand-700 font-bold font-display text-lg flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Enter Your Details</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Fill in your education, technical skills, projects, and work experience using our categorized form sections.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-soft text-center relative">
              <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-700 font-bold font-display text-lg flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Choose a Template</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Select your preferred styling from Modern, Professional, or Minimal. Switch styles instantly with zero retyping.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-soft text-center relative">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 font-bold font-display text-lg flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Save & Download</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Save your progress to your account and download your pristine resume as a standard A4 PDF ready to send.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-16 bg-gradient-to-r from-brand-700 via-purple-700 to-indigo-800 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight">
            Ready to Build Your Winning Resume?
          </h2>
          <p className="text-brand-100 max-w-xl mx-auto text-base">
            Join other students and start creating your polished resume today. It takes less than 5 minutes.
          </p>
          <div>
            <Link
              to={isAuthenticated ? '/dashboard' : '/register'}
              className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-brand-900 bg-white hover:bg-slate-100 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-5 h-5 text-brand-600" />
              <span>Create My Resume Now</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
