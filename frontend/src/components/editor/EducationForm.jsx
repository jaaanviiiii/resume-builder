import React from 'react';
import { Plus, Trash2, GraduationCap } from 'lucide-react';

// Form Section for Education Entries (Experiment 1 & 2 - Dynamic Array State)
const EducationForm = ({ education = [], onChange }) => {
  const handleAdd = () => {
    onChange([
      ...education,
      {
        college: '',
        degree: '',
        course: '',
        startYear: '',
        endYear: '',
        grade: '',
      },
    ]);
  };

  const handleRemove = (index) => {
    const updated = education.filter((_, i) => i !== index);
    onChange(updated);
  };

  const handleChange = (index, field, value) => {
    const updated = [...education];
    updated[index] = {
      ...updated[index],
      [field]: value,
    };
    onChange(updated);
  };

  return (
    <div className="space-y-4">
      {education.length === 0 ? (
        <div className="text-center py-6 bg-slate-50 border border-dashed border-slate-200 rounded-xl text-xs text-slate-500">
          No education entries added yet. Click "+ Add Education" to add your degree.
        </div>
      ) : (
        education.map((edu, index) => (
          <div
            key={index}
            className="p-4 bg-slate-50/70 border border-slate-200 rounded-xl space-y-3 relative group"
          >
            <div className="flex items-center justify-between pb-2 border-b border-slate-200/80">
              <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-brand-600" />
                Education #{index + 1}
              </span>
              <button
                type="button"
                onClick={() => handleRemove(index)}
                className="text-xs text-red-500 hover:text-red-700 flex items-center gap-1 transition-colors"
                title="Remove entry"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Remove</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <label className="block text-slate-600 font-medium mb-1">College / University</label>
                <input
                  type="text"
                  value={edu.college || ''}
                  onChange={(e) => handleChange(index, 'college', e.target.value)}
                  placeholder="e.g. Stanford University"
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                />
              </div>

              <div>
                <label className="block text-slate-600 font-medium mb-1">Degree</label>
                <input
                  type="text"
                  value={edu.degree || ''}
                  onChange={(e) => handleChange(index, 'degree', e.target.value)}
                  placeholder="e.g. Bachelor of Technology"
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                />
              </div>

              <div>
                <label className="block text-slate-600 font-medium mb-1">Course / Major</label>
                <input
                  type="text"
                  value={edu.course || ''}
                  onChange={(e) => handleChange(index, 'course', e.target.value)}
                  placeholder="e.g. Computer Science & Engg"
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                />
              </div>

              <div>
                <label className="block text-slate-600 font-medium mb-1">Grade / CGPA</label>
                <input
                  type="text"
                  value={edu.grade || ''}
                  onChange={(e) => handleChange(index, 'grade', e.target.value)}
                  placeholder="e.g. 8.5 / 10 or 3.8 GPA"
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                />
              </div>

              <div>
                <label className="block text-slate-600 font-medium mb-1">Start Year</label>
                <input
                  type="text"
                  value={edu.startYear || ''}
                  onChange={(e) => handleChange(index, 'startYear', e.target.value)}
                  placeholder="e.g. 2022"
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                />
              </div>

              <div>
                <label className="block text-slate-600 font-medium mb-1">End Year (or Expected)</label>
                <input
                  type="text"
                  value={edu.endYear || ''}
                  onChange={(e) => handleChange(index, 'endYear', e.target.value)}
                  placeholder="e.g. 2026"
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
        <span>Add Education</span>
      </button>
    </div>
  );
};

export default EducationForm;

