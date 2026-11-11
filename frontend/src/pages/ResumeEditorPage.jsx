import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import html2pdf from 'html2pdf.js';
import { api } from '../services/api';
import Navbar from '../components/Navbar';
import ResumePreview from '../components/ResumePreview';
import PersonalInfoForm from '../components/editor/PersonalInfoForm';
import EducationForm from '../components/editor/EducationForm';
import SkillsForm from '../components/editor/SkillsForm';
import ProjectsForm from '../components/editor/ProjectsForm';
import ExperienceForm from '../components/editor/ExperienceForm';
import CertificationsForm from '../components/editor/CertificationsForm';
import TemplateSelector from '../components/editor/TemplateSelector';

import {
  Save,
  Download,
  ArrowLeft,
  User,
  GraduationCap,
  Tag,
  Code,
  Briefcase,
  Award,
  Eye,
  Edit,
  Sparkles,
  Check,
  AlertCircle
} from 'lucide-react';

const initialResumeState = {
  resumeTitle: 'My Resume',
  selectedTemplate: 'modern',
  personalInfo: {
    fullName: '',
    email: '',
    phone: '',
    location: '',
    summary: '',
    linkedin: '',
    github: '',
  },
  education: [],
  skills: [],
  projects: [],
  experience: [],
  certifications: [],
};

// Resume Editor Page Component (Experiments 1, 2, 3, 4, 8 & 9)
const ResumeEditorPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [resumeData, setResumeData] = useState(initialResumeState);
  const [activeTab, setActiveTab] = useState('personal');
  const [mobileView, setMobileView] = useState('editor');
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    if (id) {
      const loadResume = async () => {
        try {
          setLoading(true);
          const response = await api.getResumeById(id);
          if (response.data) {
            setResumeData(response.data);
          }
        } catch (err) {
          showNotification('error', 'Failed to load resume: ' + err.message);
        } finally {
          setLoading(false);
        }
      };
      loadResume();
    } else {
      setResumeData({
        resumeTitle: 'Software Engineer Resume',
        selectedTemplate: 'modern',
        personalInfo: {
          fullName: 'Janvi Soni',
          email: 'janvi@gmail.com',
          phone: '+91 9876543210',
          location: 'Chandigarh, India',
          summary:
            'Passionate Software Engineering undergraduate with hands-on experience in MERN stack web development, algorithmic problem-solving, and database management.',
          linkedin: 'linkedin.com/in/janvisoni',
          github: 'github.com/janvisoni',
        },
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
        skills: ['Java', 'React', 'SQL', 'Git', 'DSA', 'Tailwind CSS', 'Node.js'],
        projects: [
          {
            title: 'ResumeBuilder Web Platform',
            technologies: 'React, Vite, Express, MongoDB',
            description: 'Created a full-featured resume application featuring live A4 rendering, multi-template switching, and JWT authentication.',
            link: 'github.com/janvi/resumebuilder',
          },
        ],
        experience: [
          {
            company: 'Innovatech Labs',
            role: 'Software Development Intern',
            duration: 'Jun 2025 – Aug 2025',
            description: 'Developed responsive frontend modules using React and assisted in writing RESTful microservices with Node.js.',
          },
        ],
        certifications: [
          {
            name: 'MERN Stack Web Development',
            organization: 'Coursera',
            year: '2025',
          },
        ],
      });
    }
  }, [id]);

  const showNotification = (type, message) => {
    setNotification({ type, message });
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      if (id) {
        await api.updateResume(id, resumeData);
        showNotification('success', 'Resume updated successfully in MongoDB!');
      } else {
        const response = await api.createResume(resumeData);
        showNotification('success', 'Resume created and saved successfully!');
        if (response.data?._id) {
          navigate(`/editor/${response.data._id}`, { replace: true });
        }
      }
    } catch (err) {
      showNotification('error', 'Error saving resume: ' + err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleDownloadPDF = async () => {
    const element = document.getElementById('resume-preview-sheet');
    if (!element) {
      alert('Could not find resume preview container to download.');
      return;
    }

    try {
      setDownloading(true);
      const filename = `${resumeData.personalInfo?.fullName || resumeData.resumeTitle || 'Resume'}.pdf`;

      const opt = {
        margin: [0, 0, 0, 0],
        filename: filename.replace(/[/\\?%*:|"<>]/g, '-'),
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          letterRendering: true,
          logging: false,
        },
        jsPDF: {
          unit: 'mm',
          format: 'a4',
          orientation: 'portrait',
        },
      };

      await html2pdf().set(opt).from(element).save();
      showNotification('success', 'Resume PDF downloaded successfully!');
    } catch (err) {
      console.error('PDF export error:', err);
      showNotification('error', 'Failed to generate PDF: ' + err.message);
    } finally {
      setDownloading(false);
    }
  };

  const tabs = [
    { id: 'personal', name: 'Personal', icon: User },
    { id: 'education', name: 'Education', icon: GraduationCap },
    { id: 'skills', name: 'Skills', icon: Tag },
    { id: 'projects', name: 'Projects', icon: Code },
    { id: 'experience', name: 'Experience', icon: Briefcase },
    { id: 'certifications', name: 'Certifications', icon: Award },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#faf8ff]">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-brand-200 border-t-brand-700 rounded-full animate-spin"></div>
          <p className="text-sm font-semibold text-slate-600">Loading resume details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8ff]">
      <Navbar />

      {/* Editor Control Toolbar */}
      <div className="bg-white/80 backdrop-blur-md border-b border-purple-100 sticky top-20 z-30 px-4 sm:px-6 lg:px-8 py-3">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Left: Back & Title Edit */}
          <div className="flex items-center gap-3">
            <Link
              to="/dashboard"
              className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-brand-50 transition-colors"
              title="Back to Dashboard"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>

            <div>
              <input
                type="text"
                value={resumeData.resumeTitle || ''}
                onChange={(e) => setResumeData({ ...resumeData, resumeTitle: e.target.value })}
                placeholder="Resume Title..."
                className="text-base sm:text-lg font-display font-extrabold text-slate-900 border-b border-transparent hover:border-slate-300 focus:border-brand-600 focus:outline-none bg-transparent transition-all px-1 py-0.5"
              />
              <span className="text-[11px] text-slate-400 block px-1">
                Template: <strong className="capitalize text-brand-700">{resumeData.selectedTemplate}</strong>
              </span>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2.5">
            <div className="flex sm:hidden p-1 bg-brand-50 rounded-lg border border-purple-100">
              <button
                onClick={() => setMobileView('editor')}
                className={`px-3 py-1 text-xs font-bold rounded-md ${
                  mobileView === 'editor' ? 'bg-white text-brand-700 shadow-xs' : 'text-slate-600'
                }`}
              >
                <Edit className="w-3.5 h-3.5 inline mr-1" />
                Edit
              </button>
              <button
                onClick={() => setMobileView('preview')}
                className={`px-3 py-1 text-xs font-bold rounded-md ${
                  mobileView === 'preview' ? 'bg-white text-brand-700 shadow-xs' : 'text-slate-600'
                }`}
              >
                <Eye className="w-3.5 h-3.5 inline mr-1" />
                Preview
              </button>
            </div>

            {/* Save Button */}
            <button
              onClick={handleSave}
              disabled={saving}
              className="inline-flex items-center gap-1.5 px-5 py-2 text-xs sm:text-sm font-bold text-brand-700 bg-brand-50 hover:bg-brand-100 border border-brand-200 rounded-full transition-all shadow-xs disabled:opacity-60"
            >
              <Save className="w-4 h-4" />
              <span>{saving ? 'Saving...' : 'Save'}</span>
            </button>

            {/* Download PDF Button */}
            <button
              onClick={handleDownloadPDF}
              disabled={downloading}
              className="inline-flex items-center gap-1.5 px-6 py-2 text-xs sm:text-sm font-bold text-white bg-brand-700 hover:bg-brand-800 rounded-full shadow-md shadow-brand-700/20 transition-all disabled:opacity-60"
            >
              {downloading ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <Download className="w-4 h-4" />
              )}
              <span>{downloading ? 'Exporting...' : 'Download PDF'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Notification */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce">
          <div
            className={`px-4 py-3 rounded-2xl shadow-xl flex items-center gap-2.5 text-xs font-bold text-white ${
              notification.type === 'error' ? 'bg-red-600' : 'bg-emerald-600'
            }`}
          >
            {notification.type === 'error' ? (
              <AlertCircle className="w-4 h-4" />
            ) : (
              <Check className="w-4 h-4" />
            )}
            <span>{notification.message}</span>
          </div>
        </div>
      )}

      {/* Main Split Layout */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form */}
          <div
            className={`lg:col-span-6 space-y-6 ${
              mobileView === 'preview' ? 'hidden lg:block' : 'block'
            }`}
          >
            {/* Template Selector Card */}
            <div className="bg-white p-5 rounded-3xl border border-purple-100 shadow-soft">
              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">
                1. Choose Template
              </h3>
              <TemplateSelector
                selectedTemplate={resumeData.selectedTemplate}
                onSelect={(templateId) =>
                  setResumeData({ ...resumeData, selectedTemplate: templateId })
                }
              />
            </div>

            {/* Section Form Card */}
            <div className="bg-white rounded-3xl border border-purple-100 shadow-soft overflow-hidden">
              <div className="border-b border-purple-100/80 bg-brand-50/50 p-2 overflow-x-auto flex gap-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;

                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                        isActive
                          ? 'bg-white text-brand-700 shadow-xs border border-purple-100'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-brand-50'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5 text-brand-600" />
                      <span>{tab.name}</span>
                    </button>
                  );
                })}
              </div>

              <div className="p-6">
                {activeTab === 'personal' && (
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-4">
                      Personal Contact Information
                    </h4>
                    <PersonalInfoForm
                      personalInfo={resumeData.personalInfo}
                      onChange={(updated) =>
                        setResumeData({ ...resumeData, personalInfo: updated })
                      }
                    />
                  </div>
                )}

                {activeTab === 'education' && (
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-4">
                      Academic Background & Education
                    </h4>
                    <EducationForm
                      education={resumeData.education}
                      onChange={(updated) =>
                        setResumeData({ ...resumeData, education: updated })
                      }
                    />
                  </div>
                )}

                {activeTab === 'skills' && (
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-4">
                      Technical & Soft Skills
                    </h4>
                    <SkillsForm
                      skills={resumeData.skills}
                      onChange={(updated) =>
                        setResumeData({ ...resumeData, skills: updated })
                      }
                    />
                  </div>
                )}

                {activeTab === 'projects' && (
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-4">
                      Academic & Personal Projects
                    </h4>
                    <ProjectsForm
                      projects={resumeData.projects}
                      onChange={(updated) =>
                        setResumeData({ ...resumeData, projects: updated })
                      }
                    />
                  </div>
                )}

                {activeTab === 'experience' && (
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-4">
                      Internships & Work Experience
                    </h4>
                    <ExperienceForm
                      experience={resumeData.experience}
                      onChange={(updated) =>
                        setResumeData({ ...resumeData, experience: updated })
                      }
                    />
                  </div>
                )}

                {activeTab === 'certifications' && (
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-4">
                      Courses & Certifications
                    </h4>
                    <CertificationsForm
                      certifications={resumeData.certifications}
                      onChange={(updated) =>
                        setResumeData({ ...resumeData, certifications: updated })
                      }
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Live A4 Preview */}
          <div
            className={`lg:col-span-6 sticky top-40 ${
              mobileView === 'editor' ? 'hidden lg:block' : 'block'
            }`}
          >
            <div className="bg-[#ede9fe]/40 rounded-3xl p-3 sm:p-4 border border-purple-200/60 shadow-inner">
              <div className="flex items-center justify-between pb-3 px-2 text-xs font-bold text-slate-700">
                <span className="flex items-center gap-1.5">
                  <Eye className="w-4 h-4 text-brand-600" />
                  Live A4 Document Preview
                </span>
                <span className="text-[11px] text-slate-500 font-medium">
                  Updates in real time
                </span>
              </div>

              <div className="max-h-[78vh] overflow-y-auto rounded-2xl">
                <ResumePreview resumeData={resumeData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeEditorPage;
