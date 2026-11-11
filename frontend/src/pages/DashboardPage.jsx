import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { api } from '../services/api';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  Plus,
  FileText,
  Edit3,
  Trash2,
  Calendar,
  ExternalLink,
  Sparkles,
  AlertCircle,
  FileCheck,
  Layout,
  Clock
} from 'lucide-react';

// Dashboard Page Component (Experiment 2, 4 & 9)
const DashboardPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [deleteId, setDeleteId] = useState(null);
  const [deleting, setDeleting] = useState(false);

  // Fetch all resumes for the logged-in user on mount (Experiment 2 & 9)
  const fetchResumes = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await api.getAllResumes();
      setResumes(response.data || []);
    } catch (err) {
      setError(err.message || 'Failed to load your resumes');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResumes();
  }, []);

  // Handle resume deletion
  const handleDelete = async (id) => {
    try {
      setDeleting(true);
      await api.deleteResume(id);
      // Synchronize frontend state after delete (Experiment 9)
      setResumes((prev) => prev.filter((r) => r._id !== id));
      setDeleteId(null);
    } catch (err) {
      alert('Failed to delete resume: ' + err.message);
    } finally {
      setDeleting(false);
    }
  };

  // Helper function to format timestamp
  const formatDate = (dateString) => {
    if (!dateString) return 'Recently';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {/* Top Header Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
                Welcome back, {user?.name || 'Student'}! 👋
              </h1>
            </div>
            <p className="text-sm text-slate-600 mt-1">
              Manage your resumes, edit content, and export polished PDFs.
            </p>
          </div>

          <Link
            to="/editor"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-xl shadow-sm hover:shadow transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Create New Resume</span>
          </Link>
        </div>

        {/* Dashboard Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-soft flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Total Resumes
              </p>
              <p className="text-2xl font-display font-bold text-slate-900 mt-0.5">
                {resumes.length}
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-soft flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <Layout className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Templates Available
              </p>
              <p className="text-2xl font-display font-bold text-slate-900 mt-0.5">
                3 Standard Styles
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-soft flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <FileCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Download Format
              </p>
              <p className="text-2xl font-display font-bold text-slate-900 mt-0.5">
                Vector A4 PDF
              </p>
            </div>
          </div>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center justify-between text-sm text-red-700">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
              <span>{error}</span>
            </div>
            <button
              onClick={fetchResumes}
              className="text-xs font-semibold underline hover:text-red-900"
            >
              Retry
            </button>
          </div>
        )}

        {/* Resumes Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-slate-900">Your Saved Resumes</h2>
            <span className="text-xs font-medium text-slate-500">
              Showing {resumes.length} {resumes.length === 1 ? 'resume' : 'resumes'}
            </span>
          </div>

          {loading ? (
            /* Loading State */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="bg-white p-6 rounded-2xl border border-slate-200 animate-pulse space-y-4"
                >
                  <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                  <div className="h-3 bg-slate-100 rounded w-1/2"></div>
                  <div className="h-10 bg-slate-100 rounded-xl"></div>
                </div>
              ))}
            </div>
          ) : resumes.length === 0 ? (
            /* Empty State */
            <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-12 text-center max-w-xl mx-auto my-8">
              <div className="w-16 h-16 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">No resumes created yet</h3>
              <p className="text-sm text-slate-600 mt-1 max-w-sm mx-auto">
                Start crafting your first professional resume with live preview and multi-template support!
              </p>
              <div className="mt-6">
                <Link
                  to="/editor"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-xl shadow-sm transition-all"
                >
                  <Plus className="w-4 h-4" />
                  <span>Create First Resume</span>
                </Link>
              </div>
            </div>
          ) : (
            /* Resumes Grid (Experiment 1 - Array.map) */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resumes.map((resume) => (
                <div
                  key={resume._id}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-soft hover:shadow-md hover:border-brand-200 transition-all flex flex-col justify-between overflow-hidden group"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                        <FileText className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 bg-slate-100 text-slate-700 rounded-full">
                        {resume.selectedTemplate || 'Modern'}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-600 transition-colors line-clamp-1">
                      {resume.resumeTitle || 'Untitled Resume'}
                    </h3>

                    <p className="text-xs text-slate-500 mt-1">
                      {resume.personalInfo?.fullName || 'No name provided'}
                    </p>

                    <div className="mt-4 flex items-center gap-1.5 text-xs text-slate-500">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Updated: {formatDate(resume.updatedAt)}</span>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-2">
                    <Link
                      to={`/editor/${resume._id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 hover:text-brand-800 transition-colors"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      <span>Edit & Export</span>
                    </Link>

                    <button
                      onClick={() => setDeleteId(resume._id)}
                      className="p-1.5 text-slate-400 hover:text-red-600 rounded-lg transition-colors"
                      title="Delete resume"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Delete Confirmation Modal */}
      {deleteId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl border border-slate-100">
            <h3 className="text-base font-bold text-slate-900 mb-2">Delete Resume?</h3>
            <p className="text-xs text-slate-600 mb-5 leading-relaxed">
              Are you sure you want to delete this resume? This action cannot be undone.
            </p>
            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setDeleteId(null)}
                disabled={deleting}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteId)}
                disabled={deleting}
                className="px-4 py-2 text-xs font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-sm transition-colors"
              >
                {deleting ? 'Deleting...' : 'Yes, Delete'}
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default DashboardPage;
