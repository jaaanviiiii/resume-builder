import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ModernTemplate from '../templates/ModernTemplate';
import ProfessionalTemplate from '../templates/ProfessionalTemplate';
import MinimalTemplate from '../templates/MinimalTemplate';
import {
  ArrowRight,
  Check,
  Zap,
  Edit3,
  Download,
  Mail,
  Phone,
  MapPin,
  Layout,
  FileText,
  Palette,
  Eye,
  Sparkles,
  Layers,
  ShieldCheck,
  FileCheck
} from 'lucide-react';

// Sample student data for interactive preview
const sampleData = {
  resumeTitle: 'Software Engineer Resume',
  personalInfo: {
    fullName: 'Janvi Soni',
    role: 'Software Engineer',
    email: 'janvi@gmail.com',
    phone: '+91 9876543210',
    location: 'Chandigarh, India',
    summary:
      'Proactive Software Engineering student with experience building high-performance web applications using React, Node.js, and modern databases.',
    linkedin: 'linkedin.com/in/janvisoni',
    github: 'github.com/janvisoni',
  },
  skills: ['Java', 'React', 'SQL', 'Git', 'DSA'],
  education: [
    {
      college: 'Punjab Technical University',
      degree: 'B.Tech',
      course: 'Computer Science',
      startYear: '2022',
      endYear: '2026',
      grade: '8.8 CGPA',
    },
  ],
  experience: [
    {
      company: 'Innovatech Labs',
      role: 'Frontend Developer Intern',
      duration: 'May 2025 - Jul 2025',
      description: 'Built reusable React components and integrated RESTful APIs.',
    },
  ],
  projects: [
    {
      title: 'ResumeBuilder Web Platform',
      technologies: 'React.js, Express, MongoDB',
      description: 'Designed a real-time SaaS resume application with live preview and vector PDF download.',
      link: 'github.com/janvi/resumebuilder',
    },
  ],
  certifications: [
    {
      name: 'Full Stack Web Development',
      organization: 'Coursera',
      year: '2025',
    },
  ],
};

const LandingPage = () => {
  const { isAuthenticated } = useAuth();
  const [selectedMockupTemplate, setSelectedMockupTemplate] = useState('modern');
  const [activeTabInsideMockup, setActiveTabInsideMockup] = useState('edit');

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8ff] text-slate-800">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
        {/* Soft Lavender Background Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-violet-200/30 rounded-full blur-3xl pointer-events-none -ml-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-5 space-y-6 text-left">
              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-display font-extrabold text-slate-950 tracking-tight leading-[1.12]">
                Create a Professional <br className="hidden sm:inline" />
                Resume in Minutes
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-lg">
                Build, customize, and download your resume with ATS-friendly templates.
              </p>

              {/* Checklist items matching screenshot */}
              <div className="space-y-3.5 pt-1">
                {[
                  'Professional Templates',
                  'Easy Drag & Drop Editor',
                  'ATS-Friendly',
                  'Download as PDF / DOCX',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-sm sm:text-base font-semibold text-slate-900">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Main CTA Pill Button */}
              <div className="pt-3">
                <Link
                  to={isAuthenticated ? '/dashboard' : '/register'}
                  className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-base font-bold text-white bg-gradient-to-r from-brand-700 via-brand-700 to-brand-600 hover:from-brand-800 hover:to-brand-700 shadow-lg shadow-brand-700/25 hover:shadow-brand-700/35 transition-all transform hover:-translate-y-0.5 group"
                >
                  <span>Create My Resume</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Hero: Sleek Laptop Mockup with Live Resume Editor Preview */}
            <div className="lg:col-span-7">
              <div className="relative mx-auto max-w-[680px]">
                {/* Laptop Display Lid / Bezel */}
                <div className="rounded-t-[22px] bg-slate-900 p-2.5 sm:p-3 shadow-laptop border-2 border-slate-700">
                  {/* Laptop Top Center Camera Dot */}
                  <div className="flex justify-center mb-1.5">
                    <div className="w-2 h-2 rounded-full bg-slate-700 ring-1 ring-slate-600"></div>
                  </div>

                  {/* Laptop Display Screen Content */}
                  <div className="bg-[#fcfaff] rounded-xl overflow-hidden border border-slate-200/60 p-2.5 sm:p-3 text-left">
                    <div className="grid grid-cols-12 gap-2 sm:gap-3 items-start">
                      {/* Left Mini Sidebar */}
                      <div className="col-span-3 sm:col-span-2.5 bg-white rounded-xl border border-purple-100 p-1.5 sm:p-2 space-y-1 shadow-xs text-[11px] sm:text-xs">
                        <button
                          onClick={() => setActiveTabInsideMockup('edit')}
                          className={`w-full flex items-center gap-1.5 px-2 py-1.5 rounded-lg font-semibold transition-all text-left ${
                            activeTabInsideMockup === 'edit'
                              ? 'bg-brand-100 text-brand-700 shadow-xs'
                              : 'text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          <Edit3 className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                          <span>Edit</span>
                        </button>
                        <button
                          onClick={() => setActiveTabInsideMockup('templates')}
                          className="w-full flex items-center gap-1.5 px-2 py-1.5 rounded-lg font-medium text-slate-600 hover:bg-slate-50 text-left"
                        >
                          <Layout className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span>Templates</span>
                        </button>
                        <button
                          onClick={() => setActiveTabInsideMockup('sections')}
                          className="w-full flex items-center gap-1.5 px-2 py-1.5 rounded-lg font-medium text-slate-600 hover:bg-slate-50 text-left"
                        >
                          <FileText className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span>Sections</span>
                        </button>
                        <button
                          onClick={() => setActiveTabInsideMockup('colors')}
                          className="w-full flex items-center gap-1.5 px-2 py-1.5 rounded-lg font-medium text-slate-600 hover:bg-slate-50 text-left"
                        >
                          <Palette className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span>Colors</span>
                        </button>
                        <button
                          onClick={() => setActiveTabInsideMockup('download')}
                          className="w-full flex items-center gap-1.5 px-2 py-1.5 rounded-lg font-medium text-slate-600 hover:bg-slate-50 text-left"
                        >
                          <Download className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span>Download</span>
                        </button>
                      </div>

                      {/* Center Resume Preview Card (matching Janvi Soni card from reference screenshot) */}
                      <div className="col-span-6 sm:col-span-6.5 bg-white rounded-xl border border-slate-200/80 p-3 sm:p-4 shadow-sm text-xs space-y-3">
                        {/* Profile Header */}
                        <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                          {/* Avatar */}
                          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-brand-100 border-2 border-brand-200 shrink-0 shadow-xs">
                            <img
                              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
                              alt="Janvi Soni"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-display font-extrabold text-sm sm:text-base text-slate-900 leading-tight">
                              Janvi Soni
                            </h3>
                            <p className="text-[11px] font-semibold text-slate-500">
                              Software Engineer
                            </p>
                          </div>
                        </div>

                        {/* Contact info list */}
                        <div className="space-y-0.5 text-[10px] text-slate-600">
                          <div className="flex items-center gap-1.5">
                            <Mail className="w-3 h-3 text-brand-600" />
                            <span>janvi@gmail.com</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Phone className="w-3 h-3 text-brand-600" />
                            <span>+91 9876543210</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-3 h-3 text-brand-600" />
                            <span>Chandigarh, India</span>
                          </div>
                        </div>

                        {/* Skills Pills */}
                        <div>
                          <h4 className="text-[10px] font-bold text-slate-900 uppercase tracking-wider mb-1">
                            Skills
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {['Java', 'React', 'SQL', 'Git', 'DSA'].map((skill) => (
                              <span
                                key={skill}
                                className="px-2 py-0.5 rounded-full text-[9px] font-semibold bg-slate-100 text-slate-700 border border-slate-200/60"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* About Me */}
                        <div>
                          <h4 className="text-[10px] font-bold text-slate-900 uppercase tracking-wider mb-1">
                            About Me
                          </h4>
                          <div className="w-full h-1.5 bg-slate-200/80 rounded-full"></div>
                        </div>

                        {/* Experience */}
                        <div>
                          <h4 className="text-[10px] font-bold text-slate-900 uppercase tracking-wider mb-1">
                            Experience
                          </h4>
                          <div className="space-y-1">
                            <div className="flex items-center gap-1.5">
                              <span className="w-1 h-1 rounded-full bg-slate-400 shrink-0"></span>
                              <div className="w-4/5 h-1.5 bg-slate-200/80 rounded-full"></div>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <span className="w-1 h-1 rounded-full bg-slate-400 shrink-0"></span>
                              <div className="w-3/5 h-1.5 bg-slate-200/80 rounded-full"></div>
                            </div>
                          </div>
                        </div>

                        {/* Education */}
                        <div>
                          <h4 className="text-[10px] font-bold text-slate-900 uppercase tracking-wider mb-1">
                            Education
                          </h4>
                          <div className="space-y-1">
                            <div className="flex items-center gap-1.5">
                              <span className="w-1 h-1 rounded-full bg-slate-400 shrink-0"></span>
                              <div className="w-3/4 h-1.5 bg-slate-200/80 rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right Sidebar: Choose Template Thumbnails */}
                      <div className="col-span-3 sm:col-span-3 bg-white rounded-xl border border-purple-100 p-2 shadow-xs space-y-1.5">
                        <p className="text-[10px] sm:text-[11px] font-bold text-slate-900 leading-tight">
                          Choose Template
                        </p>
                        <div className="space-y-1.5">
                          {/* Template 1 - Active Highlighted */}
                          <div
                            onClick={() => setSelectedMockupTemplate('modern')}
                            className={`p-1 rounded-lg border-2 cursor-pointer transition-all ${
                              selectedMockupTemplate === 'modern'
                                ? 'border-brand-600 bg-brand-50/40 ring-1 ring-brand-500/20'
                                : 'border-slate-200 hover:border-slate-300'
                            }`}
                          >
                            <div className="h-10 bg-white rounded border border-slate-100 p-1 flex flex-col justify-between overflow-hidden">
                              <div className="flex items-center gap-1">
                                <div className="w-2.5 h-2.5 rounded-full bg-brand-400"></div>
                                <div className="w-8 h-1 bg-slate-300 rounded"></div>
                              </div>
                              <div className="space-y-0.5">
                                <div className="w-full h-0.5 bg-slate-200 rounded"></div>
                                <div className="w-3/4 h-0.5 bg-slate-200 rounded"></div>
                              </div>
                            </div>
                          </div>

                          {/* Template 2 */}
                          <div
                            onClick={() => setSelectedMockupTemplate('professional')}
                            className={`p-1 rounded-lg border-2 cursor-pointer transition-all ${
                              selectedMockupTemplate === 'professional'
                                ? 'border-brand-600 bg-brand-50/40 ring-1 ring-brand-500/20'
                                : 'border-slate-200 hover:border-slate-300'
                            }`}
                          >
                            <div className="h-10 bg-white rounded border border-slate-100 p-1 flex flex-col items-center justify-between overflow-hidden">
                              <div className="w-10 h-1 bg-slate-800 rounded"></div>
                              <div className="w-full space-y-0.5">
                                <div className="w-full h-0.5 bg-slate-200 rounded"></div>
                                <div className="w-2/3 h-0.5 bg-slate-200 rounded mx-auto"></div>
                              </div>
                            </div>
                          </div>

                          {/* Template 3 */}
                          <div
                            onClick={() => setSelectedMockupTemplate('minimal')}
                            className={`p-1 rounded-lg border-2 cursor-pointer transition-all ${
                              selectedMockupTemplate === 'minimal'
                                ? 'border-brand-600 bg-brand-50/40 ring-1 ring-brand-500/20'
                                : 'border-slate-200 hover:border-slate-300'
                            }`}
                          >
                            <div className="h-10 bg-white rounded border border-slate-100 p-1 flex flex-col justify-between overflow-hidden text-left">
                              <div className="w-8 h-1 bg-neutral-900 rounded"></div>
                              <div className="space-y-0.5">
                                <div className="w-full h-0.5 bg-neutral-300 rounded"></div>
                                <div className="w-4/5 h-0.5 bg-neutral-200 rounded"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Laptop Base Stand / Chin matching hardware design */}
                <div className="relative">
                  {/* Metal Wedge Base */}
                  <div className="h-3.5 bg-gradient-to-b from-slate-300 via-slate-200 to-slate-400 rounded-b-xl shadow-md border-t border-slate-300 flex items-center justify-center">
                    {/* Trackpad notch */}
                    <div className="w-16 h-1 bg-slate-400/80 rounded-full"></div>
                  </div>
                  {/* Shadow under base */}
                  <div className="w-[90%] mx-auto h-2 bg-purple-900/10 blur-sm rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom 3 Process Steps Cards (Exactly matching reference screenshot) */}
          <div className="mt-14 sm:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-11 gap-4 items-center">
              {/* Step 1 Card */}
              <div className="md:col-span-3 bg-white p-6 rounded-2xl border border-purple-100/90 shadow-soft hover:shadow-md transition-all flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center shrink-0">
                  <Zap className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-slate-900">
                    Choose a Template
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Pick from modern, professional templates.
                  </p>
                </div>
              </div>

              {/* Connecting Arrow 1 */}
              <div className="hidden md:flex md:col-span-1 justify-center text-brand-400">
                <ArrowRight className="w-6 h-6 stroke-[2.2]" />
              </div>

              {/* Step 2 Card */}
              <div className="md:col-span-3 bg-white p-6 rounded-2xl border border-purple-100/90 shadow-soft hover:shadow-md transition-all flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center shrink-0">
                  <Edit3 className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-slate-900">
                    Add Your Details
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Fill in your education, skills, experience, and more.
                  </p>
                </div>
              </div>

              {/* Connecting Arrow 2 */}
              <div className="hidden md:flex md:col-span-1 justify-center text-brand-400">
                <ArrowRight className="w-6 h-6 stroke-[2.2]" />
              </div>

              {/* Step 3 Card */}
              <div className="md:col-span-3 bg-white p-6 rounded-2xl border border-purple-100/90 shadow-soft hover:shadow-md transition-all flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center shrink-0">
                  <Download className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-slate-900">
                    Download & Apply
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Get your resume in PDF or DOCX and apply with confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Templates Section */}
      <section id="templates" className="py-20 bg-white border-t border-purple-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ATS-Optimized Templates</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-950 tracking-tight">
              Select Your Preferred Style
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              All templates format your credentials cleanly. Click to preview with live student data.
            </p>
          </div>

          {/* Template Switcher Buttons */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1.5 bg-[#f3efff] rounded-2xl border border-purple-200">
              <button
                onClick={() => setSelectedMockupTemplate('modern')}
                className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${
                  selectedMockupTemplate === 'modern'
                    ? 'bg-white text-brand-700 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Modern SaaS
              </button>
              <button
                onClick={() => setSelectedMockupTemplate('professional')}
                className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${
                  selectedMockupTemplate === 'professional'
                    ? 'bg-white text-brand-700 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Professional Classic
              </button>
              <button
                onClick={() => setSelectedMockupTemplate('minimal')}
                className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${
                  selectedMockupTemplate === 'minimal'
                    ? 'bg-white text-brand-700 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Minimal ATS
              </button>
            </div>
          </div>

          {/* Live Document Container */}
          <div className="max-w-4xl mx-auto bg-[#faf8ff] p-4 sm:p-8 rounded-3xl border border-purple-100 shadow-inner">
            <div className="bg-white rounded-2xl shadow-paper border border-slate-200/80 overflow-hidden">
              {selectedMockupTemplate === 'modern' && <ModernTemplate data={sampleData} />}
              {selectedMockupTemplate === 'professional' && <ProfessionalTemplate data={sampleData} />}
              {selectedMockupTemplate === 'minimal' && <MinimalTemplate data={sampleData} />}
            </div>

            <div className="mt-8 text-center">
              <Link
                to={isAuthenticated ? '/editor' : '/register'}
                className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-bold text-white bg-brand-700 hover:bg-brand-800 rounded-full shadow-lg shadow-brand-700/25 transition-all transform hover:-translate-y-0.5"
              >
                <span>Use This Template in Builder</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="tips" className="py-20 bg-[#faf8ff] border-t border-purple-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-xs font-bold text-brand-600 uppercase tracking-widest mb-2">
              Why ResumeBuilder?
            </h2>
            <h3 className="text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Built for Students, Trusted by Recruiters
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-purple-100 shadow-soft">
              <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center mb-4">
                <FileCheck className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-base text-slate-900 mb-2">
                ATS-Optimized Formatting
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Standard headers, high-contrast layouts, and clean font hierarchies ensure your application clears recruiter screening parsers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-purple-100 shadow-soft">
              <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center mb-4">
                <Eye className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-base text-slate-900 mb-2">
                Live A4 Instant Preview
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Watch every word format in real-time as you type. Exactly what you see on the screen will appear in your downloaded PDF.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-purple-100 shadow-soft">
              <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-base text-slate-900 mb-2">
                Secure Cloud Storage
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Save multiple resumes in your private MongoDB cloud account. Edit, update, and re-download whenever you want.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / University Banner */}
      <section id="pricing" className="py-16 bg-gradient-to-r from-brand-800 via-brand-700 to-brand-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <span className="inline-block px-3.5 py-1 rounded-full bg-white/20 text-white text-xs font-semibold">
            100% Free Forever for Students
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight">
            Start Building Your Winning Resume Today
          </h2>
          <p className="text-purple-100 text-sm max-w-xl mx-auto">
            No subscription fees or watermarks. Craft a professional, ATS-ready resume in under five minutes.
          </p>
          <div className="pt-2">
            <Link
              to={isAuthenticated ? '/dashboard' : '/register'}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-base font-bold text-brand-900 bg-white hover:bg-slate-100 shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              <span>Get Started Now</span>
              <ArrowRight className="w-4 h-4 text-brand-700" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
