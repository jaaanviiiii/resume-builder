import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogOut, User, Menu, X, LayoutDashboard } from 'lucide-react';

// Modern SaaS Navigation Bar matching UI mockup
const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-[#faf8ff]/90 backdrop-blur-md border-b border-purple-100/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-700 to-brand-600 flex items-center justify-center text-white shadow-md shadow-brand-700/20 group-hover:scale-105 transition-all">
              {/* Document Icon matching design */}
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="8" y1="13" x2="16" y2="13" />
                <line x1="8" y1="17" x2="13" y2="17" />
              </svg>
            </div>
            <span className="text-2xl font-display font-extrabold text-slate-900 tracking-tight">
              ResumeBuilder
            </span>
          </Link>

          {/* Desktop Center Navigation Links with Pill Style */}
          <nav className="hidden md:flex items-center gap-1 bg-white/70 px-2 py-1.5 rounded-full border border-purple-100 shadow-sm">
            <Link
              to="/"
              className={`px-5 py-1.5 rounded-full text-sm font-semibold transition-all ${
                isActive('/')
                  ? 'bg-brand-100 text-brand-700 shadow-xs'
                  : 'text-slate-600 hover:text-brand-700 hover:bg-brand-50/60'
              }`}
            >
              Home
            </Link>
            <a
              href="/#templates"
              className="px-4 py-1.5 rounded-full text-sm font-semibold text-slate-600 hover:text-brand-700 hover:bg-brand-50/60 transition-all"
            >
              Templates
            </a>
            <Link
              to={isAuthenticated ? '/editor' : '/register'}
              className="px-4 py-1.5 rounded-full text-sm font-semibold text-slate-600 hover:text-brand-700 hover:bg-brand-50/60 transition-all"
            >
              Builder
            </Link>
            <a
              href="/#tips"
              className="px-4 py-1.5 rounded-full text-sm font-semibold text-slate-600 hover:text-brand-700 hover:bg-brand-50/60 transition-all"
            >
              Tips
            </a>
            <a
              href="/#pricing"
              className="px-4 py-1.5 rounded-full text-sm font-semibold text-slate-600 hover:text-brand-700 hover:bg-brand-50/60 transition-all"
            >
              Pricing
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <Link
                  to="/dashboard"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-brand-700 bg-brand-50 hover:bg-brand-100 rounded-xl transition-colors border border-brand-200"
                >
                  <LayoutDashboard className="w-4 h-4" />
                  Dashboard
                </Link>
                <div className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-purple-100 rounded-xl shadow-xs">
                  <User className="w-3.5 h-3.5 text-brand-600" />
                  <span>{user?.name || 'Student'}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="p-2 text-slate-500 hover:text-red-600 rounded-xl hover:bg-white transition-colors"
                  title="Logout"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  to="/login"
                  className="px-5 py-2 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-all shadow-xs"
                >
                  Log In
                </Link>
                <Link
                  to="/register"
                  className="px-6 py-2 text-sm font-semibold text-white bg-brand-700 hover:bg-brand-800 rounded-xl shadow-sm transition-all transform hover:-translate-y-0.5"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-brand-50"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-purple-100 bg-white px-5 pt-3 pb-6 space-y-3">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-slate-800 hover:bg-brand-50 rounded-xl"
          >
            Home
          </Link>
          <a
            href="/#templates"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-slate-800 hover:bg-brand-50 rounded-xl"
          >
            Templates
          </a>
          <Link
            to={isAuthenticated ? '/editor' : '/register'}
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-slate-800 hover:bg-brand-50 rounded-xl"
          >
            Builder
          </Link>
          <a
            href="/#tips"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-slate-800 hover:bg-brand-50 rounded-xl"
          >
            Tips
          </a>
          <a
            href="/#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-slate-800 hover:bg-brand-50 rounded-xl"
          >
            Pricing
          </a>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-brand-700 bg-brand-50 rounded-xl"
                >
                  <LayoutDashboard className="w-4 h-4" />
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleLogout();
                  }}
                  className="flex items-center justify-center gap-2 w-full py-2 text-sm font-semibold text-red-600 rounded-xl"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 text-sm font-semibold text-slate-800 border border-slate-300 rounded-xl"
                >
                  Log In
                </Link>
                <Link
                  to="/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 text-sm font-semibold text-white bg-brand-700 rounded-xl shadow-sm"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
