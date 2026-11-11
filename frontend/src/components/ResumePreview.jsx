import React from 'react';
import ModernTemplate from '../templates/ModernTemplate';
import ProfessionalTemplate from '../templates/ProfessionalTemplate';
import MinimalTemplate from '../templates/MinimalTemplate';

// Component for rendering the active resume template in an A4 sheet style (Experiment 1 & 2)
const ResumePreview = ({ resumeData }) => {
  const selectedTemplate = resumeData?.selectedTemplate || 'modern';

  // Dynamic template selection based on state
  const renderTemplate = () => {
    switch (selectedTemplate) {
      case 'professional':
        return <ProfessionalTemplate data={resumeData} />;
      case 'minimal':
        return <MinimalTemplate data={resumeData} />;
      case 'modern':
      default:
        return <ModernTemplate data={resumeData} />;
    }
  };

  return (
    <div className="w-full flex justify-center py-4 px-2 sm:px-4">
      {/* A4 Proportion Paper Container with Soft Shadow */}
      <div
        id="resume-preview-sheet"
        className="w-full max-w-[800px] min-h-[1050px] bg-white rounded-lg shadow-paper border border-slate-200/80 overflow-hidden print:border-none print:shadow-none"
      >
        {renderTemplate()}
      </div>
    </div>
  );
};

export default ResumePreview;

