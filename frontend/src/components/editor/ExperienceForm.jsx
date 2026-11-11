import React from 'react';
import { Plus, Trash2, Briefcase } from 'lucide-react';

// Form Section for Work Experience (Experiment 1 & 2 - Dynamic Array)
const ExperienceForm = ({ experience = [], onChange }) => {
  const handleAdd = () => {
    onChange([
      ...experience,
      {
        company: '',
        role: '',
        duration: '',
        description: '',
      },
    ]);
  };

  const handleRemove = (index) => {
    const updated = experience.filter((_, i) => i !== index);
    onChange(updated);
  };

  const handleChange = (index, field, value) => {
    const updated = [...experience];
    updated[index] = {
      ...updated[index],
      [field]: value,
    };
    onChange(updated);
  };

  return (
    <div className="space-y-4">
      {experience.length === 0 ? (
        <div className="text-center py-6 bg-slate-50 border border-dashed border-slate-200 rounded-xl text-xs text-slate-500">
          No work experience added yet. Add internships, part-time, or freelance roles!
        </div>
      ) : (
        experience.map((exp, index) => (
          <div
            key={index}
            className="p-4 bg-slate-50/70 border border-slate-200 rounded-xl space-y-3"
          >
            <div className="flex items-center justify-between pb-2 border-b border-slate-200/80">
              <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-brand-600" />
                Experience #{index + 1}
              </span>
              <button
                type="button"
                onClick={() => handleRemove(index)}
                className="text-xs text-red-500 hover:text-red-700 flex items-center gap-1 transition-colors"
                title="Remove experience"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Remove</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <label className="block text-slate-600 font-medium mb-1">Company / Organization</label>
                <input
                  type="text"
                  value={exp.company || ''}
                  onChange={(e) => handleChange(index, 'company', e.target.value)}
                  placeholder="e.g. Acme Innovations"
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                />
              </div>

              <div>
                <label className="block text-slate-600 font-medium mb-1">Job Role / Title</label>
                <input
                  type="text"
                  value={exp.role || ''}
                  onChange={(e) => handleChange(index, 'role', e.target.value)}
                  placeholder="e.g. Frontend Intern"
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-slate-600 font-medium mb-1">Duration / Dates</label>
                <input
                  type="text"
                  value={exp.duration || ''}
                  onChange={(e) => handleChange(index, 'duration', e.target.value)}
                  placeholder="e.g. May 2024 – July 2024 (3 months)"
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-slate-600 font-medium mb-1">Responsibilities & Achievements</label>
                <textarea
                  rows={2}
                  value={exp.description || ''}
                  onChange={(e) => handleChange(index, 'description', e.target.value)}
                  placeholder="Brief summary of duties, systems developed, or metrics improved..."
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 leading-relaxed"
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
        <span>Add Experience</span>
      </button>
    </div>
  );
};

export default ExperienceForm;
