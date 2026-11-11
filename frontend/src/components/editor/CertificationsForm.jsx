import React from 'react';
import { Plus, Trash2, Award } from 'lucide-react';

// Form Section for Certifications (Experiment 1 & 2 - Dynamic Array)
const CertificationsForm = ({ certifications = [], onChange }) => {
  const handleAdd = () => {
    onChange([
      ...certifications,
      {
        name: '',
        organization: '',
        year: '',
      },
    ]);
  };

  const handleRemove = (index) => {
    const updated = certifications.filter((_, i) => i !== index);
    onChange(updated);
  };

  const handleChange = (index, field, value) => {
    const updated = [...certifications];
    updated[index] = {
      ...updated[index],
      [field]: value,
    };
    onChange(updated);
  };

  return (
    <div className="space-y-4">
      {certifications.length === 0 ? (
        <div className="text-center py-6 bg-slate-50 border border-dashed border-slate-200 rounded-xl text-xs text-slate-500">
          No certifications added yet. Click "+ Add Certification" to list your credentials.
        </div>
      ) : (
        certifications.map((cert, index) => (
          <div
            key={index}
            className="p-4 bg-slate-50/70 border border-slate-200 rounded-xl space-y-3"
          >
            <div className="flex items-center justify-between pb-2 border-b border-slate-200/80">
              <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-brand-600" />
                Certification #{index + 1}
              </span>
              <button
                type="button"
                onClick={() => handleRemove(index)}
                className="text-xs text-red-500 hover:text-red-700 flex items-center gap-1 transition-colors"
                title="Remove certification"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Remove</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="sm:col-span-2">
                <label className="block text-slate-600 font-medium mb-1">Certificate Title</label>
                <input
                  type="text"
                  value={cert.name || ''}
                  onChange={(e) => handleChange(index, 'name', e.target.value)}
                  placeholder="e.g. AWS Certified Cloud Practitioner"
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                />
              </div>

              <div>
                <label className="block text-slate-600 font-medium mb-1">Year</label>
                <input
                  type="text"
                  value={cert.year || ''}
                  onChange={(e) => handleChange(index, 'year', e.target.value)}
                  placeholder="e.g. 2025"
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                />
              </div>

              <div className="sm:col-span-3">
                <label className="block text-slate-600 font-medium mb-1">Issuing Organization</label>
                <input
                  type="text"
                  value={cert.organization || ''}
                  onChange={(e) => handleChange(index, 'organization', e.target.value)}
                  placeholder="e.g. Amazon Web Services, Coursera, HackerRank"
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                />
              </div>
            </div>
          </div>
        ))
      )}

      <button
        type="button"
        onClick={handleAdd}
        className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-brand-700 bg-brand-50 hover:bg-brand-100 rounded-lg transition-colors border border-brand-200"
      >
        <Plus className="w-3.5 h-3.5" />
        <span>Add Certification</span>
      </button>
    </div>
  );
};

export default CertificationsForm;
