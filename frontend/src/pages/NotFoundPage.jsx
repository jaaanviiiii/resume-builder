import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FileQuestion, Home, ArrowLeft } from 'lucide-react';

// 404 Error Page Component (Experiment 3 - React Router Wildcard Route)
const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mx-auto mb-5 shadow-sm">
            <FileQuestion className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            404
          </h1>
          <h2 className="text-lg font-bold text-slate-800 mt-2">
            Page Not Found
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            Oops! The page or resume document you are looking for does not exist or has been moved.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-xl shadow-sm transition-all"
            >
              <Home className="w-4 h-4" />
              <span>Return Home</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFoundPage;
